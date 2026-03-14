require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose');

const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');
const app = express();


app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/admin',adminRouter);


// start server only after connecting to the database
const startServer= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connect successfully");
        app.listen(4000, () => {
            console.log("Server is running on port 4000");
        });

    } catch (error) {
        console.log("Database connect failed",error)
        process.exit(1);
    }
}

startServer();
