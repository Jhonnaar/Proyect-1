import app from './app.js'
import './config/mongo.js'
import cors from 'cors'
const port = process.env.PORT || 8080
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.listen(port, function () {
    console.log('Web server listening on port ',port)
  })