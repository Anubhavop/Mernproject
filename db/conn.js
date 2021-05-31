const mongoose=require("mongoose");
const DB=process.env.DATABASE;
mongoose.connect(DB,{
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
console.log("connection succesfull");
}).catch((e)=>{
console.log(`no connection ${e}`);
})

