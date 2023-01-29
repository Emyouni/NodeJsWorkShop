import express from 'express';
import gameRoute from "./Routers/game.route.js"
import mongoose, { mongo } from "mongoose"; 




const hostname='127.0.0.1';

const port= process.env.port||9090;
const app = express ();

const databaseName ='workshop2cinfo2' ;
mongoose.set('debug', true) ;


mongoose.Promise = global.Promise ; 


mongoose
.connect(`mongodb://localhost:27017/${databaseName}`)
.then (()=> 
{console.log(`connecté to ${databaseName}`)})

.catch(err=> {console.log(err);});


app.use(express.json()) ;
app.use('/game',gameRoute);


app.listen(port,hostname , () => {
    console.log('serveur yemshi jawou behi on http://${hostname}:${port}');
})

