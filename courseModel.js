const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    course1:{
        type:String,
        required:true,
    },
    course2:{
        type:String,
        required:true,
    },
    course3:{
        type:String,
        required:true
    },
    course4:{
        type:String,
        required:true,
    },
    course5:{
        type:String,
        required:true,
    },
    course6:{
        type:String,
        required:true,
    },
},
{timestamps:true}
);

module.exports=new mongoose.model("course",courseSchema)