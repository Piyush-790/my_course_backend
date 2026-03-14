const express = require('express');

const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const app = express();


app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);

app.listen(4000,()=>{
    console.log("server is running on port 4000");
});