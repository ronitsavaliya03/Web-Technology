const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Faculty=require('./Schema');

require('dotenv').config();

const connectionString='mongodburl/databasename'
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connected");

    const app=express();
    app.use(bodyParser.urlencoded({extended: false}));

    //App level Middleware
    app.use('/',async(req,res,next)=>{
        console.log("call")   
        const ans=await Faculty.findOne({
            FacultyName:req.body.FacultyName,
            Password:req.body.Password
        });

        if(ans!==null){
            next();
        }
        else{
            res.send("unathorized");
        }
    });

    //GetOne
    app.get('/faculties/:name',async(req,res)=>{
        const ans=await Faculty.findOne({FacultyName:req.params.name});
        res.send(ans);
    });

    //GetAll
    app.get('/faculties',async(req,res)=>{
        const ans=await Faculty.find();
        res.send(ans);
    });

    //Create
    app.post('/faculties',async(req,res)=>{
        fac=new Faculty({...req.body});
        const ans=await fac.save();
        res.send(ans);
    });

    //Delete
    app.delete('/faculties/:id',async(req,res)=>{
        const ans=await Faculty.deleteOne({FacultyID:req.params.id});
        res.send(ans);
    });

    //Update
    app.patch('/faculties/:id',async(req,res)=>{
        const fac=await Faculty.findOne({FacultyID:req.params.id});
        // fac.FacultyInitial=req.body.FacultyInitial;
        // fac.FacultyID=req.body.FacultyID;
        // fac.FacultyName=req.body.FacultyName;
        fac.Password=req.body.Password;

        const ans=await fac.save();
        res.send(ans);
    });

    //Search
    app.get('/faculties/search/:text',async(req,res)=>{
        const ans=await Faculty.find({
            FacultyName:{
                $regex:req.params.text
            }
        });
        res.send(ans);
    });

    
    app.listen(process.env.port,()=>{
        console.log("Success");
    });
});


