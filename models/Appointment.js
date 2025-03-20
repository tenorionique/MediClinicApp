import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: { type: Date, required: true },
  doctorId: {
    type: String,
    required: true,
    validate: {
      validator: async function (v) {
        if (!mongoose.Types.ObjectId.isValid(v)) return false;
        return await Doctor.exists({ _id: new mongoose.Types.ObjectId(v) });
      },
      message: props => `DoctorId ${props.value} not found.`
    }
  },
  pacientId: {
    type: String,
    required: true,
    validate: {
      validator: async function (v) {
        if (!mongoose.Types.ObjectId.isValid(v)) return false;
        return await Pacient.exists({ _id: new mongoose.Types.ObjectId(v) });
      },
      message: props => `PacientId ${props.value} not found.`
    }
  },
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
