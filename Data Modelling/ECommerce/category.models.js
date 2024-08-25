const mongoose=require('mongoose');

const categorySchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps: true});

export const Category= mongoose.model("Category",categorySchema);
// module.exports= mongoose.model("Category",categorySchema);
