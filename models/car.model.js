import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
	user_id:{type:String,required:true},
    product_id:{type:String,required:true}
},{versionKey:false})

export default mongoose.model('car', carSchema);