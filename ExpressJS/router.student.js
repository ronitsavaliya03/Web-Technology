const express= require('express');

const router= express.Router();

const Student=require('./schema.student');

const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

const mongoose=require('mongoose');
const connectionString='mongodburl/databasename'
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connected");

    //GetOne
    router.get('/students/:name',async(req,res)=>{
        const ans=await Student.findOne({Name:req.params.name});
        res.send(ans);
    });

    //GetAll
    router.get('/students',async(req,res)=>{
        const ans=await Student.find();
        res.send(ans);
    });

    //Create
    router.post('/students',async(req,res)=>{
        stu=new Student({...req.body});
        const ans=await stu.save();
        res.send(ans);
    });

    //Delete
    router.delete('/students/:id',async(req,res)=>{
        const ans=await Student.deleteOne({EnrollmentNo:req.params.id});
        res.send(ans);
    });

    //Update
    router.patch('/students/:id',async(req,res)=>{
        const stu=await Student.findOne({EnrollmentNo:req.params.id});
        stu.Mobile=req.body.Mobile;

        const ans=await stu.save();
        res.send(ans);
    });

    //Search
    router.get('/students/search/:text',async(req,res)=>{
        const ans=await Student.find({
            Name:{
                $regex:req.params.text
            }
        });
        res.send(ans);
    });

});

module.exports=router;
