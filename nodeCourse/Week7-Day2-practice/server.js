const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env"
})
// console.log(process.env);

const app = require('./app');

const perscholasDB = mongoose
    .connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD),{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    .then(() => {
    console.log("DATABASE IS UP AND RUNNING...");
    })

const port = 3000;

app.listen(port,() => {
    console.log('Listening on port:',port);
})