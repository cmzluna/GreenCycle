import { Schema, model } from 'mongoose'

const centersSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    latitudes: {
        type: Array
    }
})


export const centersModel = model('Centers', centersSchema)


