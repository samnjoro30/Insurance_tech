const http = require('http');
const express = require('expresss');

const app = express();

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})