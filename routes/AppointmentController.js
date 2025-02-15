import express from 'express';
import AppointmentService from '../services/AppointmentService.js';

let router = express.Router();

router.get('/appointments', async (req, res) => {
  try {
    const appointments = await AppointmentService.getAllAppointments();
    res.send(appointments);
  } catch(error) {
    res.status(500).send(error);
  }
});

  router.get('/getAppointment/:id', async (req, res) => {
    const {id} = req.params;
    try {
      const appointments = await AppointmentService.getAppointmentById(id);
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  router.post('/postAppointment/:id', async (req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
      const appointments = await AppointmentService.saveAppointment({date, doctorId, pacientId});
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  router.put('/appointments/:id', async (req, res) => {
    const {date, doctorId, pacientId} = req.body;
    const {id} = req.params;
    try {
      const appointments = await AppointmentService.updateAppointment(id, {date, doctorId, pacientId});
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  router.delete('/appointments/:id', async (req, res) => {
    const {id} = req.params;
    try {
      const appointments = await AppointmentService.deleteAppointmentd(id);
      res.send(appointments);
    } catch(error) {
      res.status(500).send(error);
    }
  })

export default router;