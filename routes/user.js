// const exptress = require('express');
// const userRouter = exptress.Router();

const {Router} = require('express')
const userRouter = Router();
//login route
userRouter.post('/login',(req,res)=>{
    res.json({
        message:"Login successful"
    })
})

//signup route 
userRouter.post('/signup',(req,res)=>{
    res.json({
        message:"Signup successful"
    })
})

//buy course route:- 

userRouter.post('/buy-course',(req,res)=>{
    res.json({
        // real world we take money and then give access to course but here we are just sending response
        message:"course bought successfully"        
    })
})

module.exports= {userRouter:userRouter};