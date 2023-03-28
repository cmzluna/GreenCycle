import mongoose from "mongoose";

const recyclesSchema = new mongoose.Schema({
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

export const recyclesModel = mongoose.model('Recycles', usersSchema)