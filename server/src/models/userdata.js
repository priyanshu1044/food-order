const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://priyanshu:priyanshu1234@cluster0.ugz9ejc.mongodb.net/?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const userSchema= new Schema({
    uname:String,
    email:String,
    address:String,
    password:String
},{strict:false});
var userdata=mongoose.model('userdata',userSchema);
module.exports=userdata;
