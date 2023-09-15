import express from 'express'
import EmployeControllers from '../../controllers/employe.controllers'

const router = express.Router()

const controllers: EmployeControllers = new EmployeControllers()

router.get('/', controllers.getAllEmployes)
router.get('/:id', controllers.getEmployeById)
router.get('/name/:name', controllers.getEmployeByName)
router.post('/create', controllers.createEmploye)
router.get('/filter', controllers.filterByProps)
router.put('/:id', controllers.updateEmploye)
router.delete('/:id', controllers.removeEmployeById)
router.delete('/area/:area', controllers.removeEmployesFromArea)

export default router