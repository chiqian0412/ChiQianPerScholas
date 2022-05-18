const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });

app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

const fruits = require('./models/fruits.js');


app.get('/fruits/', (req, res) => {
    res.render('index',{fruits:fruits});
});
app.get('/fruits/new', (req, res) => {
    res.render('New');
});
//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show',{ //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});
app.listen(3000,() => {
    console.log(`Listening on port ${process.env.port}`);
});