import "./dbConfig.js";
import {__dirname} from "./utils.js" ;
import express from "express";
import session from "express-session"; 
import mongoStore from 'connect-mongo';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))

//CONEXIÓN A MONGO ATLAS

app.use(
    session({
      store: new mongoStore({
        mongoUrl:'mongodb+srv://nmayord:Nat1mayor23@cluster0.sy4jpe7.mongodb.net/GreenCycle?retryWrites=true&w=majority'
      }),
      resave: false,
      saveUninitialized: false,
      secret: 'sessionKey',
      cookie:{maxAge:60000}
    })
    )



//lectura de bd
app.use(express.static(__dirname+"/public"));

const port = process.env.PORT || 3000; //o escoge aleatoio o se va al 8080
app.listen(port, () => console.log("puerto ok"));

