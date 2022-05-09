import mongoose from 'mongoose'

const historySchema = new mongoose.Schema({
	user_id:{type:String,required:true},
    product_id:{type:String,required:true},
    created_date:{type:String,required:true}
},{versionKey:false})

export default mongoose.model('history', historySchema);