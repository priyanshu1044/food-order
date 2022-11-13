const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://priyanshu:priyanshu1234@cluster0.ugz9ejc.mongodb.net/?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const categorySchema= new Schema({
    
    categoryName:String,
    image:String
},{strict:false});
var categorydata=mongoose.model('categorydata',categorySchema);
module.exports=categorydata;