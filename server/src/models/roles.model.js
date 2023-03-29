import { Schema, model } from 'mongoose';

const schemaRoles = new Schema({
    name: {
        type: String
    }
})

export default model('Role', schemaRoles);
