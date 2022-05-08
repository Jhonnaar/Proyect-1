import mongoose from 'mongoose'
const url = 'mongodb+srv://Admin:admin@cluster0.1d5ln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url)
    .then(db=> console.log("Db is connected"))
    .catch(error=> console.log(error))
