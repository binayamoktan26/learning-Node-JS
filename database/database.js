const mongoose=require("mongoose")
exports.connectDatabase= async()=>{
await mongoose.connect("mongodb+srv://binayamoktan26:binayamoktan@cluster0.elihyg4.mongodb.net/?retryWrites=true&w=majority")
console.log("database connected successfully")
}