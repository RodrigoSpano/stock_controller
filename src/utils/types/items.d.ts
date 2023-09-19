import { Types } from "mongoose"

export type TitemBase = {
  id?: Types.ObjectId | string
  stock: number
  name: string
  price: number
}

export interface IItemClass {
  getAll(): Promise<TitemBase[]>
  getOne(id:string): Promise<TitemBase>
  createOne(data: TitemBase): Promise<TitemBase>
  updateStock(id: string, stock: number): Promise<TitemBase>
  deleteOne(id:string): Promise<void>
}