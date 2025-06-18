const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const auth = require("./routes/auth");


const DB = () =>{
    try{
       connect.mongoose(process.env.MONGO_URL)
       console.log("COnnected to mongo successfull", databaseConnect);
    }catch(error){
        console.error("Cant connect to database", error);
    }
}
DB()

app.use('/api/auth', auth);

const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})