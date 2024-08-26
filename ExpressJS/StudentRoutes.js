const express= require('express');
const router= express.Router();

//GetOne
router.get('/students/:name',async(req,res)=>{
    const ans=await Faculty.findOne({Name:req.params.name});
    res.send(ans);
});

//GetAll
router.get('/students',async(req,res)=>{
    const ans=await Faculty.find();
    res.send(ans);
});

//Create
router.post('/students',async(req,res)=>{
    fac=new Faculty({...req.body});
    const ans=await fac.save();
    res.send(ans);
});

//Delete
router.delete('/students/:id',async(req,res)=>{
    const ans=await Faculty.deleteOne({EnrollmentNo:req.params.id});
    res.send(ans);
});

module.exports=router;