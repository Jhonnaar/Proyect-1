import User from '../models/user.model.js'


export const create_user = async (req, res) =>{
    const {display_name, username, password} = req.body
    const newUser = new User({
        display_name,
        username,
        password
    })
    try {
        const savedUser = await newUser.save();
        res.json(savedUser)
    } catch (error) {
        res.json()
    }
}
export const get_user = async (req, res)=>{
    const user = await User.findById(req.query.user_id)
    if (!user) {
        res.json()
    }else{
        res.json(user)
    }
}
export const login = async (req,res)=>{
    const user_input = req.body
    const users = await User.find()
    const user = users.find(us=>us.username==user_input.username)
    if (user) {
        if (user.password==user_input.password) {
            res.json(user)
        }else{
            res.json({})
        }
    }else{
        res.json()
    }

}
export const get_prevLogin = async (req,res)=>{
    const input_id = req.body
    const user = await User.findById(input_id.user_id)
    if (user) {
        res.json(user)
    }else{
        
    }
}