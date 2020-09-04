import express from 'express';
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';
import SubjectsController from './controllers/subjectsController';

const router = express.Router();

const classController = new ClassesController();
const connectionsController = new ConnectionsController();
const subjectsController = new SubjectsController();


router.get('/classes', classController.index);
router.post('/classes', classController.create);
router.get('/connections', connectionsController.index);
router.post('/connections', connectionsController.create);
router.get('/subjects', subjectsController.index);




export default router;