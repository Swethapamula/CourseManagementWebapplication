const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.f0m8q.mongodb.net/CourseManagementDB?retryWrites=true&w=majority');
const schema= mongoose.Schema;
const profSchema =new schema({
    name:String,
    email:String,
    password:String,
    role:String,

})
 const profData = mongoose.model("professorData",profSchema);
 module.exports=profData;