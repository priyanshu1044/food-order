const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://priyanshu:priyanshu1234@cluster0.ugz9ejc.mongodb.net/?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const reviewsSchema= new Schema({
    product_id:{type:Schema.Types.ObjectId,ref:"productsdata"},
    user_id:{type:Schema.Types.ObjectId,ref:"userdata"},
    rating:String,
review:String
},{strict:false});
var reviewsdata=mongoose.model('cartdata',reviewsSchema);
module.exports=reviewsdata;