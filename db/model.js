const mongoose=require('mongoose')
const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Todo field is required']
    }
})

const Todo=mongoose.model('quotes',TodoSchema)
module.exports=Todo