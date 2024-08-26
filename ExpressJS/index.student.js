const express= require('express');
const app= express();
require('dotenv').config();

const studentRoutes= require('./router.student');

app.use('/',studentRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server started @"+process.env.PORT);
});