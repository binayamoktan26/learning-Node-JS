const express=require("express")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


const mongoose=require("mongoose")
const { connectDatabase } = require("./database/database")
connectDatabase()
//   GET API

app.get("/",(req,res)=>{
   
   
    // res.json({
    //     stutus:200,

    //     message:"hello this is binaya moktan "
    // })
})

// CREATE  BLOG API
app.post("/createBlog",async(req,res)=>{
    const title=req.body.title
    const subTitle=req.body.subTitle
    const discription=req.body.discription
     //  insert to database logic

   await Blog.create({
        title:title,
        subTitle:subTitle,
        description:description
    })
    res.json({
        status:201,
        message:"Blog created succesfully"
    })
}
)
    


app.listen(2000,(req,res)=>{
    console.log("Nodejs has started at port 2000");
  })
  
