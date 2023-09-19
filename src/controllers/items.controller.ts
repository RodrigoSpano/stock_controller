import { Request, Response } from "express";
import ItemModelClass from "../models/itemsModel";
import { TitemBase } from "../utils/types/items";

export default class ItemsControllers {
  protected model: ItemModelClass = new ItemModelClass()

  async getAll(req: Request, res: Response) {
    try {
      const items: TitemBase[] = await this.model.getAll()
      return res.status(200).json({items})
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getOne(req: Request, res: Response){
    try {
      const item: TitemBase = await this.model.getOne(req.params.id)
      if(!item) return res.status(404).json({error: 'item not found'})
      return res.status(202).json(item)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async createOne(req: Request, res: Response){
    try {
      const item: TitemBase = await this.model.createOne(req.body.data)
      if(!item) return res.status(400)
      return res.status(201).json(item)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async updateStock(req: Request, res: Response){
    try {
      const updateItem: TitemBase = await this.model.updateStock(req.params.id, req.body.stock)
      if(!updateItem) return res.status(400)
      return res.status(202).json({success:true, message: 'item updated', item: updateItem})
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async deleteOne(req: Request, res: Response){
    try {
      await this.model.deleteOne(req.params.id)
      return res.status(200).json({success:true, message: `item with id: ${req.params.id} deleted`})
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}