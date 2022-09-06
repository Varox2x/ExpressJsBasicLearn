const express = require('express');
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');
const cookieParser = require('cookie-parser');


const {request, response, json} = require("express");

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use((req,res,next) => {
    console.log(`${req.method} : ${req.url}`);
    next();
})

app.use('/api/groceries',groceriesRoute);
app.use('/api/markets',marketsRoute);

app.listen(PORT, () => console.log("Running express on port: " + PORT));


