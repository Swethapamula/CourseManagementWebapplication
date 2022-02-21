const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@cluster0.f0m8q.mongodb.net/CourseManagementDB?retryWrites=true&w=majority');
const schema=mongoose.Schema
const studentSchema= new schema({   
    name:String,
    email:String,
    password:String,
    phone:String,
    address:String,
    district:String,
    state:String,
    qualification:String,
    passout:String,
    courses:String,
    status:String
    
});

var studentData = mongoose.model("StudentData", studentSchema);
module.exports = studentData;
