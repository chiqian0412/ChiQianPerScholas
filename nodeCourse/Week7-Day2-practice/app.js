const express = require('express');
const app = express();
// const learnerControllers = require('./controllers/learnerControllers.js')

const learnerRouter = require('./routes/learnerRoutes')

// create a middleware toparse the request body.
app.use(express.json());
// Create a middleWare to handle route /api/v1/learners/
// /api/v1/learners/:id
app.use("/api/v1/learners",learnerRouter);

module.exports = app;
