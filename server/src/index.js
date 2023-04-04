// SYSTEM IMPORTS
import express from "express";
import session from "express-session"; 
import mongoStore from 'connect-mongo';
import handlebars from 'express-handlebars'; 
import morgan from 'morgan';
import cors from 'cors';
// CUSTOM IMPORTS
import {__dirname} from "./utils.js" ;
import './dbConfig.js';
import usersRouter from './routes/users.router.js';
import scoresRouter from './routes/scores.router.js';
import viewsRouter from './routes/views.router.js';
import bottlesRouter from './routes/bottles.router.js'
import mapsRouter from './routes/maps.router.js'
import { PORT, URI_MONGO } from './const.js';

const app = express();

//seteo el PORT
app.set('port', PORT)

// SETEO BASICO DE APLICACION-SERVIDOR
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
app.use(express.static(__dirname+"/public"));
app.use(morgan('dev'));
app.use(cors());
// app.use(checkJwt)
/*
estoy nos servira para aceptar las llamadas del front, debemos esperar a que este lista la URL del front para hacerlo funcional

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONT_DOMINIO); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

*/
// HANDLEBARS SET UP
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


//CONEXIÓN A MONGO ATLAS
app.use(
    session({
      store: new mongoStore({
        mongoUrl: URI_MONGO
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
app.use('/GreenCycle/scores', scoresRouter)
app.use('/GreenCycle/bottles', bottlesRouter)
app.use('/GreenCycle/maps', mapsRouter)

// ROOT PATH 
app.get('/',(req,res)=>{
  res.redirect('GreenCycle/views/login')
})



app.listen(app.get('port'), () => console.log(`App listening in port ${app.get('port')} => http://localhost:4200`));

