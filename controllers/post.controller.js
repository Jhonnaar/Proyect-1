import Post from '../models/post.model.js'


export const get_posts = async (req,res)=>{
    const post = await Post.findById(req.params._id)
    if (post) {
        res.json({post})
    }else{
        const posts = (await Post.find()).filter(post=>post.owner_id==req.params._id)
        if (posts) {
            res.json({posts})
        }else{
            res.json({})
        }
    }
}
export const create_post = async (req,res)=>{
    const {owner_id, img_url, display_name, price, description, created_date} = req.body
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
        res.json({post: savedPost})
    } catch (error) {
        console.log(error)
        res.json({error: error})
    }
}



