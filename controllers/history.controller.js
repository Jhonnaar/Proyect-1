import History from '../models/history.model.js'

export const get_history = async(req,res)=>{
    const user = req.params
    const hists = await History.find()
    if (hists) {
        hists = hists.filter(c=>c.user_id==user.user_id)
        res.json(hists)
    }else{
        res.json()
    }
}