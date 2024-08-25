const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    comolete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ],// Array of SubTodos
}, {timestamps: true});

export const Todo= new mongoose.model('Todo', todoSchema);