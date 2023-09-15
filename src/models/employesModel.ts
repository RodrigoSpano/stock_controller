import employeModel from "../db/dbModels/employeModel";
import { IModelClass, TEmployeBase, TFilterParams, TUpdateEmployeParams } from "../utils/types/employes.interface";



export default class EmployeModel implements IModelClass {
  async getAll():Promise<TEmployeBase[] | []>{
    const employes = await employeModel.find()
    return employes
  }

  async getById(id:string): Promise<TEmployeBase>{
    const employe = await employeModel.findById(id)
    if(!employe) throw new TypeError('employe with that ID does not exists')
    else return employe
  }

  async getByName({name, lastname}: {name: string, lastname: string}):Promise<TEmployeBase>{
    const employe = await employeModel.findOne({name, lastname})
    if(!employe) throw new TypeError('employe with that NAME and LASTNAME does not exists')
    else return employe
  }

  async filterByProp({type, value}: TFilterParams): Promise<TEmployeBase[]>{
    if(!type || !value) throw new TypeError('missing values of TYPE and VALUE props ')
    if(type === 'position'){
      const employes: TEmployeBase[] = await employeModel.find({position: value})
      return employes
    }
    if(type === 'area'){
      const employes: TEmployeBase[] = await employeModel.find({area: value})
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
    else throw new TypeError('type is needed for filtering')
  }

  async createEmploye(data: TEmployeBase): Promise<TEmployeBase>{
    const newEmploye: TEmployeBase = await employeModel.create(data)
    if(!newEmploye) throw new TypeError('an error ocurren, employe not created')
    return newEmploye
  }

  async updateEmploye({id, data}: {id: string, data: TUpdateEmployeParams }):Promise<TEmployeBase|null>{
    if(!id || !data ) throw new TypeError('missing values')
    const updateEmploye = await employeModel.findByIdAndUpdate(id, {data}, {new: true})
    if(!updateEmploye) throw new TypeError('employed not found')
    await updateEmploye?.save()
    return updateEmploye
  }

  async removeEmployeById({id}:{id: string}):Promise<void>{
    if(!id) throw new TypeError('ID is required')
    await employeModel.deleteOne({id})
  }

  async removeManyFromArea({area}: {area: string}):Promise<void>{
    await employeModel.deleteMany({area})
  }

}