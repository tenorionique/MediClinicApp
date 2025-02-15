import { Appointment } from '../models/Appointment'

const getAllAppointments = async () => {
  return await Appointment.find()
}

const getAppointmentById = async (id) => {
  try {
    return await Appointment.findById(id)
  } catch (error) {
    throw new Error(error)
  }
}

const saveAppointment = async ({ date, doctorId, pacientId }) => {
  try {
    const prescription = new Appointment({ date, doctorId, pacientId })
    return await prescription.save()
  } catch (error) {
    throw new Error(error)
  }
}

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  try {
    return await Appointment.findByIdAndUpdate(
      id,
      { date, doctorId, pacientId },
      { new: true }
    )
  } catch (error) {}
}

const deleteAppointment = async (id) => {
  try {
    return await Appointment.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(error)
  }
}

const appointmentRepository = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
}

export default appointmentRepository
