import { Schema, model } from 'mongoose'

const donationsSchema= new Schema({
    growth:{
        type: String,
    },
    currentPoints:{
        
    }


})


export const donationsModel = model('Donations',donationsSchema)