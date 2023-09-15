import { Types } from "mongoose"

export interface ItemBase {
  id?: Types.ObjectId | string
  stock: number
  name: string
  price: number
}
