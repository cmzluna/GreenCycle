import { Schema, model } from "mongoose";
import passportlocal from 'passport-local-mongoose'; 
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
    //image:{
        //type: String,
    //},
    //role: [
        //{
        //  type: Schema.Types.ObjectId,
        //  ref: 'Roles',
       // }
  //  ]
})
usersSchema.plugin(passportlocal, {
    usernameField: 'email'
});

export const usersModel = model('Users', usersSchema)