const mongoose=require('mongoose');

const schema=mongoose.Schema({
    EnrollmentNo: Number,
    Name: String,
    Semester: Number,
    Email: String,
    Mobile: Number
});

module.exports= mongoose.model("Student",schema);