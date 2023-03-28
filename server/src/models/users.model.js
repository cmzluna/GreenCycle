import { Schema, model } from "mongoose";

const usersSchema = new Schema({
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

export const usersModel = model('Users', usersSchema)