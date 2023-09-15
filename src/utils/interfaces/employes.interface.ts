import { Document, Types } from "mongoose"

export interface EmployeBase extends Document{
  id?: Types.ObjectId | string
  name: string
  lastname: string
  age: number
  position: string
  hired_at: string
  gender: 'male' | 'female'
  nationality: string
}

// export interface EmployeMethods extends EmployeBase {
//   create(data: EmployeBase): void
//   save(): void
// }