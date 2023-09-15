import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'

import indexRouter from './routes/index.routes'

export const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', indexRouter)