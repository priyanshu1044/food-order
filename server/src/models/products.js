const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://priyanshu:priyanshu1234@cluster0.ugz9ejc.mongodb.net/?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const productSchema= new Schema({
    category_id:{type:Schema.Types.ObjectId,ref:"categorydata"},
    productName:String,
    price:String,
    image:String,
    instock:String
},{strict:false});
var productsdata=mongoose.model('productsdata',productSchema);
module.exports=productsdata;