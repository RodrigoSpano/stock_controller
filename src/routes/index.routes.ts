import express from 'express'
import { employeRoutes } from './sub-routes'

const router = express.Router()

router.use('/employe', employeRoutes) 

export default router