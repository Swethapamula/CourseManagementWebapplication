const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.f0m8q.mongodb.net/CourseManagementDB?retryWrites=true&w=majority');
const schema= mongoose.Schema;
const courseSchema= new mongoose.Schema({
    coursename: String,
    code: String,
    duration:String,
    price:Number,
    image:String,
    details:String
});
 const courseData=mongoose.model('CourseData',courseSchema);
 module.exports=courseData;