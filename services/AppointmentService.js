import AppointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointments = async () => {
  return AppointmentRepository.getAllAppointments();
};

const getAppointmentById = async (id) => {
  return AppointmentRepository.getAppointmentById(id);
};

const saveAppointment = async ({date, doctorId, pacientId}) => {
  return AppointmentRepository.saveAppointment({date, doctorId, pacientId});
};

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
  return AppointmentRepository.updateAppointment(id, {date, doctorId, pacientId});
};

const deleteAppointment = async (id) => {
  return AppointmentRepository.deleteAppointment(id);
}

const appointmentService = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment
}

export default appointmentService;