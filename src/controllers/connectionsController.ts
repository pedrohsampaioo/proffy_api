import db from "../database/connection";
import { Request, Response } from 'express';

export default class ConnectionsController {
    async index(request: Request, response: Response) {
        try {
            const connectionsCount = await db('connections').count('* as total');
            const total = connectionsCount[0];
            return response.json(total);
        } catch (err) {
            return response.sendStatus(400).json({
                error: 'unexpected error'
            });
        }
    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;
        const trx = await db.transaction();
        try {
            await trx('connections').insert({ user_id });
            await trx.commit();
            return response.status(201).send();
        } catch (err) {
            await trx.rollback();
            return response.sendStatus(400).json({
                error: 'unexpected error'
            });
        }
    }
}