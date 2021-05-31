const jwt=require("jsonwebtoken");
const express=require("express");
const router=express.Router();
const bcrypt=require('bcryptjs');
require("../db/conn");
const User=require('../models/schema');
const authenticate=require('../middleware/authenticate')



// const middleware=(req,res,next)=>{
//     console.log("Anubhav");
//     next();
// }

router.post('/register',async(req,res)=>{
    
    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({error:"plz filled the form"});
    }

    try{
        const userExist=await User.findOne({email:email});

        if(userExist){
            res.status(422).json({error:"matching"});
        }
          else{
        const data= new User({name,email,phone,work,password,cpassword});

        await data.save();
        res.status(201).json({message:"user registered sucessfully"});
          }
    }
    catch(e){
       console.log(e);
    }


})

router.post('/signin',async(req,res)=>{
    try{
    const {email,password}=req.body;

    if(!email || !password){
        res.status(400).json({error:"plz filled the data"});
    }

    const userLogin=await User.findOne({email:email});

    
    if(userLogin){
        
        const isMatch=await bcrypt.compare(password,userLogin.password);
        const token=await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwttoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        });
        if(isMatch){
            res.json({message:"user login successfully"});
        }
        else{
            res.status(400).json({error:"Invalid credentials"});
        }
    }
    else{
        res.status(400).json({error:"Invalid credentials"});
        }
}
catch(e){
  console.log(`error ${e}`);
}


})




router.get("/about",authenticate,async(req,res)=>{
    res.send(req.rootUser);
})
router.get("/getData",authenticate,async(req,res)=>{
    res.send(req.rootUser);
})
router.post("/contact",authenticate,async(req,res)=>{
    try{
         const{name,email,phone,message}=req.body;

         if  (!name || !email || !phone || !message){
             console.log("error in contact form");
             return res.json({error:"plz filled the contact form"});
         }

         const userContact=await User.findOne({_id:req.userID})

         if(userContact){
             const userMessage=userContact.addMessage(name,email,phone,message);

            //  await userContact.save();
             res.status(201).json({message:"user contact sucessfully"});
         }

    }
    catch(e){
       console.log(e);
    }
})

router.get("/logout",async(req,res)=>{
    res.clearCookie('jwttoken',{path:'/'});
    res.status(200).send('user Logout');
})
module.exports=router;

