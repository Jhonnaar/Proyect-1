import Post from '../models/post.model.js'


export const get_posts = async (req,res)=>{
    const input_id = req.query
    if (input_id.user_id) {
        const user_posts = (await Post.find()).filter(post=>post.owner_id==input_id.user_id)
        if (user_posts) {
            res.json({user_posts})
        }else{
            res.json({})
        }
    }else{
        const post = await Post.findById(input_id.post_id)
        if (post) {
            res.json({post})
        }else{
            res.json({})
        }
    }
}
export const create_post = async (req,res)=>{
    const {owner_id, img_url, display_name, price, description} = req.body
    const date = new Date();
    const created_date = date.toString()
    const newPost = new Post({
        owner_id,
        img_url,
        display_name,
        price,
        description,
        created_date
    })
    try {
        const savedPost = await newPost.save();
        res.json({savedPost})
    } catch (error) {
        res.json({})
    }
}
export const recent_posts = async (req,res)=>{
    const posts = await Post.find()
    if (posts) {
        if (posts.created_date) {
            posts = (posts.created_date).sort()
            res.json({posts})
        }else{
            res.json({posts})
        }
    }else{
        res.json({})
    }
}



