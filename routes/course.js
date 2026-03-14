
const {Router} = require('express');
const courseRouter = Router();


// all coures route
courseRouter.get('/allcourse',(req,res)=>{
    res.json({
        message:"all courses"
    })
})

//purchesed courses route
courseRouter.get('/purchased-course',(req,res)=>{
    res.json({
        message:"purchased courses"
    })
})

module.exports= {courseRouter:courseRouter};