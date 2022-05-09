import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
	user_id:{type:String,required:true},
    product_id:{type:String,required:true},
    rating:{type:String,required:true},
    description:{type:String,required:true},
    created_date:{type:String,required:true}
},{versionKey:false})

export default mongoose.model('review', reviewSchema);