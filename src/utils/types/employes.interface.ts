import { Types } from "mongoose"

//employe db-model
export type TEmployeBase = {
  id?: Types.ObjectId | string;
  name: string;
  lastname: string;
  age: number;
  position: string;
  area: string;
  hired_at: string;
  gender: 'male' | 'female';
  nationality: string;
}

//employes model
export type TUpdateEmployeParams = { age: number } | {position: string}
export type TFilterParams = {type: 'position' | 'area' | 'gender' | 'nationality' | undefined, value: string | undefined}

//class model interface
export interface IModelClass {
  getAll(): Promise<TEmployeBase[] | []>
  getById(id:string): Promise<TEmployeBase>
  getByName({name,lastname}: {name:string, lastname:string}):Promise<TEmployeBase>
  filterByProp({type, value}: TFilterParams): Promise<TEmployeBase[]>
  createEmploye(data: TEmployeBase): Promise<TEmployeBase>
  updateEmploye({id, data}: {id: string, data: TUpdateEmployeParams }):Promise<TEmployeBase|null>
  removeEmployeById({id}:{id: string}):Promise<void>
  removeManyFromArea({area}: {area: string}):Promise<void>
}