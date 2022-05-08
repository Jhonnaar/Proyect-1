import app from './app.js'
import './config/mongo.js'

const port = process.env.PORT || 8080

app.listen(port, function () {
    console.log('CORS-enabled web server listening on port ',port)
  })