const {Router} = require('express');
const adminRouter = Router();
const {adminModel}= require('../db');


adminRouter.post('/dashboard',(req,res)=>{
    res.json({
        message:"Admin dashboard"
    })
})

adminRouter.post('/login',(req,res)=>{
    res.json({
        message:"Admin login successful"
    })
})

adminRouter.post('/signup',(req,res)=>{
    res.json({
        message:"Admin signup successful"
    })
})

adminRouter.post('/course',(req,res)=>{
    res.json({
        message:"Admin created successfully"
    })
})

adminRouter.put('/course',(req,res)=>{
    res.json({
        message:"Admin updated successfully"
    })
})

module.exports= {adminRouter:adminRouter};