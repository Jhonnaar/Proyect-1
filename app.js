import express from 'express'
import userRoutes from './routes/users.routes.js'
import postRoutes from './routes/posts.routes.js'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use('/users',userRoutes)
app.use('/posts',postRoutes)







export default app