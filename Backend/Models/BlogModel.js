const mongoose=require("mongoose")
const schema=mongoose.Schema({
    name:{
        type:String   
    },
    date:{
        type:Date,
        default:Date.now()  
    },
    content:{
        type:String
    }
    
})
module.exports=mongoose.model("BlogApp",schema)