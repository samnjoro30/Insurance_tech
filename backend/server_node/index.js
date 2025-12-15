const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const { Mongo_Db } = require('./config/db');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: [ 
        'http://localhost:5173',
        "https://insurance-tech-xi.vercel.app",
    ],
    credentials: true
 }))

const auth = require("./routes/auth");
const dash = require("./routes/dash")

app.use('/api/auth', auth);
app.use('/api/dash', dash);

const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})