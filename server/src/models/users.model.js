import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    role:{
        type: String,
    }
})

export const usersModel = mongoose.model('Users', usersSchema)