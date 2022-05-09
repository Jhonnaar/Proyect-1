import express from 'express'
import userRoutes from './routes/users.routes.js'
import postRoutes from './routes/posts.routes.js'
import cartRoutes from './routes/car.routes.js'
import historyRoutes from './routes/history.routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use('/users',userRoutes)
app.use('/posts',postRoutes)
app.use('/cart',cartRoutes)
app.use('/history',historyRoutes)







export default app