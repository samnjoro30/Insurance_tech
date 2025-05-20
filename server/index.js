const http = require('http');
const express = require('express');

const app = express();

const auth = require("./routes/auth");


app.use('/api/auth', auth);

const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})