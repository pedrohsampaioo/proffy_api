import { Request, Response } from 'express';
import db from '../database/connection';

export default class SubjectsController {
    async index(request: Request, response: Response) {
        try {
            const subjects = await db('classes').distinct('subject');
            const formattedSubjects = subjects.map<String>((subject) => subject.subject);
            return response.json(formattedSubjects);
        } catch (err) {
            return response.sendStatus(400).json({
                error: 'unexpected error'
            });
        }
    }
}