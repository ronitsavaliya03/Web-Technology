const mongoose=require('mongoose');

const subTodoSchema= new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Todo= new mongoose.model('SubTodo', subTodoSchema);