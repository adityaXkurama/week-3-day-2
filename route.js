// const express=require("express");
// const router=express.Router();

// const studentController=require("../Controllers/studentController");
// const courseController=require("../Controllers/courseController");

// router.post("/register",studentController.createStudent);

// module.exports=router;
const express=require("express");
const router=express.Router();

const CourseController=require("../Controllers/courseController")
router.post("/register",CourseController.createCourse);
module.exports=router;