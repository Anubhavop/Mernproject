const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});
const cookieParser=require("cookie-parser")
require("./db/conn");
const User=require('./models/schema');
const port=process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth')); 




app.listen(port,()=>{
    console.log(`connection is live at port ${port}`);
})