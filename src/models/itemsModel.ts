import itemModel from "../db/dbModels/itemModel";
import { IItemClass, TitemBase } from "../utils/types/items";

export default class ItemModelClass implements IItemClass {
  protected Model = itemModel

  async getAll(): Promise<TitemBase[]>{
    const items: TitemBase[] = await this.Model.find()
    return items
  }

  async getOne(id: string): Promise<TitemBase> {
    const item: TitemBase | null = await this.Model.findById(id)
    if(!item) throw new TypeError('Item not found')
    return item
  }

  async createOne(data: TitemBase): Promise<TitemBase> {
    const newITem: TitemBase = await this.Model.create(data)
    return newITem
  }

  async deleteOne(id: string): Promise<void> {
    await this.Model.deleteOne({id})
  }

  async updateStock(id: string, stock: number): Promise<TitemBase> {
    const updateItem: TitemBase | null = await this.Model.findByIdAndUpdate(id, {stock}, {new: true})
    if(!updateItem) throw new TypeError('An error has ocurred when updating')
    return updateItem
  }
}