import mongoose from "mongoose";
import { EmployeBase } from "../../utils/interfaces/employes.interface";

const EmployeSchema = new mongoose.Schema<EmployeBase>({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 17
  },
  position: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  hired_at: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  }
})

export default mongoose.model<EmployeBase>('employe', EmployeSchema)