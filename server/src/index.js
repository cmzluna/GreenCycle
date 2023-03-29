// SYSTEM IMPORTS
import express from "express";
import session from "express-session"; 
import mongoStore from 'connect-mongo';
import handlebars from 'express-handlebars';

// CUSTOM IMPORTS
import {__dirname} from "./utils.js" ;
import './dbConfig.js';
import usersRouter from './routes/users.router.js';
import recyclesRouter from './routes/recycles.router.js';
import viewsRouter from './routes/views.router.js';

import { PORT } from './config.js';

const app = express();

//seteo el PORT
app.set('port', PORT)

// SETEO BASICO DE APLICACION-SERVIDOR
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
app.use(express.static(__dirname+"/public"));

// HANDLEBARS SET UP
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


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


// ROUTES
app.use('/GreenCycle/views', viewsRouter)  
app.use('/GreenCycle/users', usersRouter)  
app.use('/GreenCycle/recycles', recyclesRouter)

app.get('/',(req,res)=>{
  res.redirect('/views/login')
})



app.listen(app.get('port'), () => console.log(`App listening in port ${app.get('port')}`));

