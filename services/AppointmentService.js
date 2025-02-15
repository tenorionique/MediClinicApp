import appointmentRepository from "../repositories/AppointmentRepository";

const getAllAppointments = async () => {
  return appointmentRepository.getAllAppointments();
};

const getAppointmentById = async (id) => {
  return appointmentRepository.getAppointmentById(id);
};

const saveAppointment = async ({date, doctorId, pacientId}) => {
  return appointmentRepository.saveAppointment({date, doctorId, pacientId});
};

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
  return appointmentRepository.updateAppointment(id, {date, doctorId, pacientId});
};

const deleteAppointment = async (id) => {
  return appointmentRepository.deleteAppointment(id);
}

const appointmentService = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment
}

export default appointmentService;