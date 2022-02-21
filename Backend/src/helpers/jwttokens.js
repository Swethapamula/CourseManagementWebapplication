const JWT = require("jsonwebtoken");
const createHttpError = require("http-errors");

 module.exports= {

 generateToken:(user)=>{
    const payload = {
      role:user.role,
    };
 const secret = "faa33f74f301329f163e35ecb83ef4485f97a61aa4071f18df1b78495e7aeb90";
 const options = {
  expiresIn: "1hr",
  issuer:"tcsion",
  audience:user.role,
};

  const token= JWT.sign(payload,secret,options);
  return token;

  },
  verifyToken:(req, res, next)=>
  {
     console.log(req)
     
      if (!req.headers["authorization"])
           return next(createHttpError.Unauthorized());
         const authHeader = req.headers["authorization"];
         const token = authHeader.split(" ")[1];
         if (token === "null") return next(createHttpError.Unauthorized());
         const secret ="faa33f74f301329f163e35ecb83ef4485f97a61aa4071f18df1b78495e7aeb90";
         JWT.verify(token, secret, (err, payload) => {
           if (err) {
     
             const message =
               err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
     
             return next(createHttpError.Unauthorized(message));
           }
     
           req.payload = payload;
           next();
         });
 
 
  },
  
  
}
