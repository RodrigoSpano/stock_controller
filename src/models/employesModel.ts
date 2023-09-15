import employeModel from "../db/dbModels/employeModel";
import { TEmployeBase, TFilterParams, TUpdateEmployeParams } from "../utils/types/employes.interface";

export default class EmployeModel {
  static async getAll():Promise<TEmployeBase[] | []>{
    const employes = await employeModel.find()
    return employes
  }

  static async getById(id:string): Promise<TEmployeBase>{
    const employe = await employeModel.findById(id)
    if(!employe) throw new TypeError('employe with that ID does not exists')
    else return employe
  }

  static async getByName({name, lastname}: {name: string, lastname: string}):Promise<TEmployeBase>{
  const employe = await employeModel.findOne({name, lastname})
  if(!employe) throw new TypeError('employe with that NAME and LASTNAME does not exists')
  else return employe
  }

  static async filterByProp({type, value}: TFilterParams): Promise<TEmployeBase[]>{
    if(type === 'position'){
      const employes: TEmployeBase[] = await employeModel.find({position: value})
      return employes
    }
    if(type === 'gender'){
      const employes: TEmployeBase[] = await employeModel.find({gender: value})
      return employes
    }
    if(type === 'nationality'){
      const employes: TEmployeBase[] = await employeModel.find({nationality: value})
      return employes
    }
    else return []
  }

  static async createEmploye(data: TEmployeBase): Promise<TEmployeBase>{
    const newEmploye: TEmployeBase = await employeModel.create(data)
    return newEmploye
  }

  static async updateEmploye({id, data}: {id: string, data: TUpdateEmployeParams }){
    const updateEmploye = await employeModel.findByIdAndUpdate(id, {data}, {new: true})
    await updateEmploye?.save()
    return updateEmploye
  }

  static async removeEmployeById({id}:{id: string}){
    await employeModel.deleteOne({id})
  }

  static async removeManyFromSector({position}: {position: string}){
    await employeModel.deleteMany({position})
  }

}