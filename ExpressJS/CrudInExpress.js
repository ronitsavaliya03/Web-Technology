const express=require('express');
const app=express();

const bodyParse=require('body-parser');

app.use(bodyParse.urlencoded());

const students=[
    {
        name:"Nirav",
        id:1,
        email:"nirav123@gmail.com"
    },
    {
        name:"Priyanshu",
        id:2,
        email:"priyanshu456@gmail.com"
    },
    {
        name:"Harsh",
        id:3,
        email:"harsh789@gmail.com"
    }
]


//Read All Data
app.get('/students',(req,res)=>{
    res.send(students);
});

//Read Data from specific index
app.get('/students/:index',(req,res)=>{
    res.send(students[req.params.index]);
});

//Add Data
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("Done")
})

//Update
app.patch('/students/:id',(req,res)=>{
    const idToEdit=students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });

    students[idToEdit]=req.body;
    res.send("Updated");
});

//Delete
app.delete('/students/:id',(req,res)=>{
    const idToEdit=students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });

    if(students[idToEdit]===undefined){
        res.send("Not a Find");
    }

    console.log(students[idToEdit]);
    students.splice(idToEdit,1);
    res.send("Deleted");
});

app.listen(4040,()=>{
    console.log("Success");
});