import { Request, Response } from 'express';
import converHourToMinutes from '../utils/convertHourToMinutes';
import db from '../database/connection';

interface ScheduleItem {
    week_day: number;
    from: String;
    to: String;
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        try {
            const {
                week_day,
                subject,
                time
            } = request.query;

            const queryClasses = db('classes')
                .select('*')
                .join('users', 'classes.user_id', '=', 'users.id');

            if (week_day) {
                queryClasses.whereExists(function () {
                    this.select('schedules.*')
                        .from('schedules')
                        .whereRaw('`schedules`.`class_id` = `classes`.`id`')
                        .whereRaw('`schedules`.`week_day` = ?', [Number(week_day)]);
                });
            }

            if (subject) {
                queryClasses.whereRaw(`subject = ?`, [String(subject)]);
            }

            if (time) {
                const timeInMinutes = converHourToMinutes(String(time));
                queryClasses.whereExists(function () {
                    this.select('schedules.*')
                        .from('schedules')
                        .whereRaw('`schedules`.`class_id` = `classes`.`id`')
                        .whereRaw('`schedules`.`to` >= ?', [Number(timeInMinutes)])
                        .whereRaw('`schedules`.`from` < ?', [Number(timeInMinutes)]);

                });
            }
            const classes = await queryClasses;
            return response.json(classes);
        } catch (err) {
            return response.sendStatus(400).json({
                error: 'unexpected error'
            });
        }
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedules,
        } = request.body;
        const trx = await db.transaction();
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
            const user_id = insertedUsersIds[0];
            const insertedClassesIds = await trx('classes').insert({
                user_id,
                subject,
                cost,
            });
            const class_id = insertedUsersIds[0];
            const schedulesToSave = schedules.map(
                (schedule: ScheduleItem) => {
                    return {
                        week_day: schedule.week_day,
                        from: converHourToMinutes(schedule.from),
                        to: converHourToMinutes(schedule.to),
                        class_id,
                    }
                }
            );
            await trx('schedules').insert(schedulesToSave);
            await trx.commit();
            return response.sendStatus(201).send();
        } catch (err) {
            await trx.rollback();
            return response.sendStatus(400).json({
                error: 'unexpected error'
            });
        }
    }
}