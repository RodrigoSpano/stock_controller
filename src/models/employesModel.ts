import employeModel from "../db/dbModels/employeModel";
import { EmployeBase } from "../utils/interfaces/employes.interface";

export default class EmployeModel {
  static async getAll():Promise<EmployeBase[] | []>{
    const employes = await employeModel.find()
    return employes
  }

  static async getById(id:string): Promise<EmployeBase>{
    const employe = await employeModel.findById(id)
    if(!employe) throw new TypeError('employe with that ID does not exists')
    else return employe
  }

  static async getByName({name, lastname}: {name: string, lastname: string}):Promise<EmployeBase>{
  const employe = await employeModel.findOne({name, lastname})
  if(!employe) throw new TypeError('employe with that NAME and LASTNAME does not exists')
  else return employe
  }

  static async filterByPosition({type, value}: {type: 'position' | 'gender' | 'nationality', value: string}): Promise<EmployeBase[]>{
    if(type === 'position'){
      const employes: EmployeBase[] = await employeModel.find({position: value})
      return employes
    }
    if(type === 'gender'){
      const employes: EmployeBase[] = await employeModel.find({gender: value})
      return employes
    }
    if(type === 'nationality'){
      const employes: EmployeBase[] = await employeModel.find({nationality: value})
      return employes
    }
    else return []
  }

  static async updateEmploye({id, data}: {id: string, data: {age: number} | {position: string} }){
    const updateEmploye = await employeModel.findByIdAndUpdate(id, {data}, {new: true})
    await updateEmploye?.save()
    return updateEmploye
  }

  static async removeOneEmploye({id}:{id: string}){
    await employeModel.deleteOne({id})
  }

  static async removeManyFromSector({position}: {position: string}){
    await employeModel.deleteMany({position})
  }

}