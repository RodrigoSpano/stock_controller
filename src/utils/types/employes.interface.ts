import { Types } from "mongoose"

//employe db-model
export type TEmployeBase = {
  id?: Types.ObjectId | string;
  name: string;
  lastname: string;
  age: number;
  position: string;
  hired_at: string;
  gender: 'male' | 'female';
  nationality: string;
}

//employes model
export type TUpdateEmployeParams = { age: number } | {position: string}
export type TFilterParams = {type: 'position' | 'gender' | 'nationality', value: string}
