import { Schema, model } from "mongoose";

const recyclesSchema = new Schema({
    currentPoints: {
        type: Number,
        required: true,
    },
    materialType: {
        type: String,
        required: true
    },
    currentWeight:{
        type: Number,
        required: true
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
})

export const recyclesModel = model('Recycles', recyclesSchema)