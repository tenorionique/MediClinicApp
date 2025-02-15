import express from 'express';
import appointmentService from '../services/AppointmentService';

let router = express.Router();

router.get('/appointments', async (req, res) => {
  try {
    const appointments = await appointmentService.getAllAppointments();
    res.send(appointments);
  } catch(error) {
    res.status(500).send(error);
  }
});

  router.get('/getAppointment/:id', async (req, res) => {
    const {id} = req.params;
    try {
      const appointments = await appointmentService.getAppointmentById(id);
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  router.post('/postAppointment/:id', async (req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
      const appointments = await appointmentService.saveAppointment({date, doctorId, pacientId});
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  router.put('/appointments/:id', async (req, res) => {
    const {date, doctorId, pacientId} = req.body;
    const {id} = req.params;
    try {
      const appointments = await appointmentService.updateAppointment(id, {date, doctorId, pacientId});
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  router.delete('/appointments/:id', async (req, res) => {
    const {id} = req.params;
    try {
      const appointments = await appointmentService.deleteAppointmentd(id);
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  })

export default router();