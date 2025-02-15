import mongoose from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  prescriptionId: {
    type: String,
    required: [true, 'prescriptionId is required.']
  },
  date: {
    type: Date,
    required: false
  },
  medicine: {
    type: String,
    required: [true, 'Medicine is required.']
  },
  dosage: {
    type: String,
    required: [true, 'Dosage is required.']
  },
  instructions: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})

const prescription = mongoose.model("Prescription", prescriptionSchema);
export default prescription;