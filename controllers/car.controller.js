import Car from '../models/car.model.js'
import History from '../models/history.model.js'
export const get_car = async(req,res)=>{
    const user = req.query
    const car = await Car.find()
    if (car) {
        car = car.filter(c=>c.user_id==user.user_id)
        res.json({car})
    }else{
        res.json({})
    }
}
export const add_to_car = async(req,res)=>{
    const {product_id, user_id} = req.body
    const newCar = new Car({
        user_id,
        product_id
    })
    try {
        const savedCar = await newCar.save();
        res.json({savedCar})
    } catch (error) {
        res.json({})
    }
}
export const delete_to_car = async(req,res)=>{
    const item = req.query
    const items = await Car.findByIdAndDelete(item.item_id)
}
export const buy_car = async(req,res)=>{
    const user = req.body
    const car = await Car.find()
    if (car) {
        car = car.filter(c=>c.user_id==user.user_id)
        const date = new Date();
        const created_date = date.toString()
        const history = car.map(c=>{
            const product_id = c._id
            const user_id = user.user_id
            const newHis = new History({
                user_id,
                product_id,
                created_date
            })
            return newHis
        })
        for(h of History){
            await h.save()
        }
    }else{
        res.json({})
    }
}




