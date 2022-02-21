const express = require('express')
const router=  express.Router();
const usersData = require('../models/userData');
const bcrypt = require('bcrypt');
var config = require('../config');
const JWT = require("jsonwebtoken");

const { generateToken,verifyToken } = require("../helpers/jwttokens");


//  function generateToken(user){
    
//   const payload = {
//         role:user.role,
//       };
//    const secret = "faa33f74f301329f163e35ecb83ef4485f97a61aa4071f18df1b78495e7aeb90";
//    const options = {
//     expiresIn: "1hr",
//     issuer:"tcsion",
//     audience:user.role,
//   };

//     const token= JWT.sign(payload,secret,options);
//     return token;
//  }

//  function verifyToken(req, res, next)
//  {
    
//      if (!req.headers["authorization"])
//           return next(createHttpError.Unauthorized());
//         const authHeader = req.headers["authorization"];
//         const token = authHeader.split(" ")[1];
//         if (token === "null") return next(createHttpError.Unauthorized());
//         const secret ="faa33f74f301329f163e35ecb83ef4485f97a61aa4071f18df1b78495e7aeb90";
//         JWT.verify(token, secret, (err, payload) => {
//           if (err) {
    
//             const message =
//               err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
    
//             return next(createHttpError.Unauthorized(message));
//           }
    
//           req.payload = payload;
//           next();
//         });


//  }
  

router.post("/login", async(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header( "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    email=req.body.email

     const user =  await  usersData.findOne({email:email})
     console.log(user);
    if (user == null) res.status(404).send ("User does not exist!")

    if (bcrypt.compare(req.body.password, user.password)) {
      const accessToken = generateToken (user)
      console.log(accessToken)
       res.send ({accessToken: accessToken,role:user.role})
       } 
        else {
      res.status(401).send("Password Incorrect!")
     }
});
router.post('/register', async(req,res,next)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
 console.log("in register")
   try{
    const data= await usersData.find().where({name:req.body.usersData.name,email:req.body.usersData.email})
    console.log(data.length)
    if (data.length>0) {
        return res.send({msg:"User Already Exist. Please Login"});
      }
  else
        {
         var item = 
            {
              name:req.body.usersData.name,
              email:(req.body.usersData.email).toLowerCase(),
              password:req.body.usersData.password,
              role:req.body.usersData.role,
           }

        item.password=await bcrypt.hash(item.password,10)
         console.log(item)
         usersData.create(item).then(function(data,error){
          if (error) return res.send(error)
          const accessToken = generateToken(item);
          res.send ({accessToken: accessToken,role:item.role,msg:"Successfully Registered"})


        })
           
        }
     


    }
    catch(err)
    {
        res.send(err)
    }
});


 module.exports=router;