import express from 'express'
import cors from 'cors'
import userRoutes from './routes/users.routes.js'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use('/users',userRoutes)







export default app