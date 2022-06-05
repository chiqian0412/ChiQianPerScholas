const express = require('express');
const app = express();
// const learnerControllers = require('./controllers/learnerControllers.js')
const learnerRouter = require('./routes/learnerRoutes')

// create a middleware toparse the request body.
app.use(express.json());

// Create a middleWare to handle route /api/v1/learners/
// /api/v1/learners/:id
app.use("/api/v1/learners",learnerRouter);

// create a way to handle errors
app.all("*",(req,res,next) =>{
    const routeError = new Error(`Oooops! Cannot find ${req.originalUrl} on our servers...`);
// assign a status code 
    routeError.statusCode = 500;

    //assign a status
    routeError.status = "fail";

    next(routeError);

    // //send response
    // res.status(routeError.statusCode).json({
    //     status: routeError.status,
    //     message: routeError.message,
    // })
})

// create a middleware to bounce back the error
app.use((error,req,res,next) =>{

    // Retrieve the error status code
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";
    error.message = error.message || "Something went wrong..."

    //send response
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
    })

    next();
})

module.exports = app;
