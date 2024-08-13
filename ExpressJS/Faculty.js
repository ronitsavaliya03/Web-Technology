const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Faculty=require('./Schema');
const app=express();

mongoose.connect("mongodb+srv://ronitsavaliya:ronit%4005@cluster0.hvbcc.mongodb.net/",{useNewUrlParser: true})
.then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({extended: false}));

    //code

    app.listen(3001,()=>{
        console.log("Success");
    });
});


