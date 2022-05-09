import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	display_name: {type:String,required:true},
    username: {type: String, required:true, unique:true},
    password: {type: String, required:true}
},{versionKey:false})

export default mongoose.model('user', userSchema);