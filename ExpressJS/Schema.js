const mongoose= require('mongoose');

const schema= mongoose.Schema({
    FacultyID: Number,
    FacultyName: String,
    FacultyInitial: String
});

//                            (Table Name,object Name)
module.exports= mongoose.model("Faculty",schema)