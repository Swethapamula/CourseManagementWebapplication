const  express = require('express');
const app=  express();
const cors= require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require("path");
const jwt = require("jsonwebtoken");

const port = 3000;
const studentRoute = require('./src/routes/studentRoute')
const professorRoute= require('./src/routes/professorRoute')
const authRoute= require('./src/routes/authRoute')


app.use('/student', studentRoute );
app.use('/professor',professorRoute);
app.use('/auth',authRoute);



app.listen(port,()=>{console.log("server is running at " +port)})