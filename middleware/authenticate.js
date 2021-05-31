const jwt=require("jsonwebtoken");
const User=require('../models/schema');




const authenticate= async(req,res,next)=>{
try{
const token=req.cookies.jwttoken;
console.log(token);
const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
console.log(rootUser);

if(!rootUser){throw new Error('User not found')}
req.token=token;
req.rootUser=rootUser;
req.userID=rootUser._id;
next();
}
catch(e){
    res.status(401).send("user Unauthorized");
    console.log(e);
}
}

module.exports=authenticate;