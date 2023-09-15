import { Request, Response } from 'express'
import EmployeModel from '../models/employesModel'
import { TEmployeBase, TFilterParams } from '../utils/types/employes.interface'

export default class EmployeControllers {
   protected model: EmployeModel = new EmployeModel()

   async getAllEmployes(req: Request,res: Response){
    try {
      const employes: TEmployeBase[] | [] = await this.model.getAll()
      return res.status(200).json({employes})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  async getEmployeById(req: Request, res: Response){
    const {id} = req.params
    try {
      const employe: TEmployeBase | null = await this.model.getById(id)
      return res.status(200).json({employe})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  async getEmployeByName(req: Request, res: Response){
    const {name, lastname} = req.body
    try {
      const employe: TEmployeBase = await this.model.getByName({name, lastname})
      return res.status(200).json({employe})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  async createEmploye(req: Request, res: Response){
    try {
      const newEmploye = await this.model.createEmploye(req.body)
      return res.status(201).json({employe: newEmploye})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  async filterByProps(req: Request, res: Response){
    const {type, value} = req.query
    try { //! fix querys types error
      if(!type || !value) return res.status(400).json({message: 'bad request'})
      const filteredEmployes = await this.model.filterByProp({type,value})
      return res.status(202).json({employes: filteredEmployes})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  async updateEmploye(req: Request, res: Response){
    const {id} = req.params
    try {
      const updatedEmploye = await this.model.updateEmploye({id, data: req.body})
      return res.status(202).json({employe: updatedEmploye})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  async removeEmployeById(req: Request, res: Response){
    const {id} = req.params
    try {
      await this.model.removeEmployeById({id})
      return res.status(200).json({success: true})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  async removeEmployesFromArea(req: Request, res: Response){
    const {area} = req.params
    try {
      await this.model.removeManyFromArea({area})
      return res.status(200).json({success: true})
    } catch (error) {
      return res.status(500).json({error})
    }
  }
}