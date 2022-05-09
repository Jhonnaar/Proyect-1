import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
	owner_id:{type:String,required:true},
    img_url:{type:String,required:true},
    display_name:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String},
    created_date:{type:String,required:true}
},{versionKey:false})

export default mongoose.model('post', postSchema);