// console.log("hello");
const express=require("express");
const mongoose=require("mongoose")
const routes=require("./Routes/route");

const app=express();
app.use(express.json())

app.use("/",routes);
//DB Connection
mongoose.connect(
    "mongodb+srv://adiiitya:mongodb%40h2r@cluster0.zmyzxwz.mongodb.net/batch3"
).then(()=>{
    console.log("Database is connected successfully😎")
})
.catch((err)=>{
    console.log(err,"something went wrong")
})


//test API
app.get("/test",(req,res)=>{
    res.send("Hello , This is Test Api")
});

app.listen(5000,()=>{
    console.log("Server is Running On port 5000")
});