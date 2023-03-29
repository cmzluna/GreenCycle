import { Schema, model } from "mongoose";

const recyclesSchema = new Schema({
    currentPoints: {
        type: Number,
       // required: true,

    },
    materialType: {
        type: String,
       // required: true
    },
    currentWeight:{
        type: Number,
       // required: true
    },
   /* userID:{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }*/
})

recyclesSchema.path("currentPoints").set(function(currentPoints){
    //currentPoints = this.currentPoints * this.currentWeight; 
    console.log(currentPoints, this.currentPoints, this.currentWeight)
    return currentPoints;
    
    //con esta funcion seteadora nos evitamos tener que hacer ese cálculo en cada request en los endpoints  
    //en el esquema  debo acceder a los datos del request 
});

export const recyclesModel = model('Recycles', recyclesSchema)


