const mongoose = require("mongoose")
const schema = mongoose.scheme
const blogSchema = new schema({
title : {
    type:string
},
subTitle :{
    type:string
},
discription:{
    type:string
}
},{
    timestamps:true
}
)
const Blog = mongoose.model(Blog,blogSchema)
module.export=Blog