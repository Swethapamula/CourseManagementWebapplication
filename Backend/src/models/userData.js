const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.f0m8q.mongodb.net/CourseManagementDB?retryWrites=true&w=majority');
const schema= mongoose.Schema;
const userSchema =new schema({
    name:String,
    email:String,
    password:String,
    role:String,

})
 const usersData = mongoose.model("usersData",userSchema);
 module.exports=usersData;