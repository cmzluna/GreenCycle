import { Schema, model } from 'mongoose'

const bottlesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    pointsByBottle: {
        type: Number
    },
    weightOfBottle: {
        type: Number
    }
})


export const bottlesModel = model('Bottles', bottlesSchema)