import User from '../models/user.model.js'


export const create_user = async (req, res) =>{
    const {name, username, password} = req.body
    const publications = null
    const shopping_history =null
    const newUser = new User({
        name,
        username,
        password,
        publications,
        shopping_history
    })
    console.log(newUser)
    try {
        const savedUser = await newUser.save();
        res.json({user: savedUser})
    } catch (error) {
        console.log(error)
        res.json({error: error})
    }
}
export const get_user = async (req, res)=>{
    const users = await User.find()
    const key = req.body
    const user = users.filter(us=>us.username==key.username)
    if (user.length==0) {
        res.json("User not found")
    }else{
        res.json({user})
    }
}
export const get_posts = async (req,res)=>{
    const users = await User.find()
    const key = req.body
    const user = users.find(us=>us.username==key.username)
    if (user.length==0) {
        res.json("User not found")
    }else{
        const user_publications = user.publications
        res.json({user_publications})
    }
}
export const get_recent_posts = async (req,res)=>{
    const users = await User.find()
    const posts = users.map(user=>user.publications)
    res.json(posts)
}