const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Faculty=require('./Schema');


const connectionString='mongodburl';
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connected");

    const app=express();
    app.use(bodyParser.urlencoded({extended: false}));

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
        fac.FacultyInitial=req.body.FacultyInitial;

        const ans=await fac.save();
        res.send(ans);
    });

    
    app.listen(3001,()=>{
        console.log("Success");
    });
});




