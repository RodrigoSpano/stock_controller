import mongoose from "mongoose";
import { TEmployeBase } from "../../utils/types/employes.interface";

const EmployeSchema = new mongoose.Schema<TEmployeBase>({
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

export default mongoose.model<TEmployeBase>('employe', EmployeSchema)