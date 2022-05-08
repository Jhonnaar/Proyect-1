import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	name: String,
    username: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    publications: Array,
    shopping_history: Array
});

export default mongoose.model('user', userSchema);