import express  from 'express';
import appointmentController from './controllers/appointmentController';
import doctorController from './controllers/doctorController';
import pacientController from './controllers/pacientController';
import prescriptionController from './controllers/prescriptionController';

let router = express.Router();

router.get('/', (req, res) => {
  console.log('GET /');
  res.status(200).json({ message: 'Hello, world!' });
});

router.use('/', appointmentController);
router.use('/', doctorController);
router.use('/', pacientController);
router.use('/', prescriptionController);

export default router;