const express=require('express');
const path=require('path');
const app=express();

app.get('/',(req,res)=>{
    res.sendFile('C:\\Darshan University(B.tech)\\Web Technology\\UMS\\MainPage.html');
    // res.send("Hello Buddy");
});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'../UMS/TimeTable.html'));
});


app.listen(4000,()=>{
    console.log('Done');
});
