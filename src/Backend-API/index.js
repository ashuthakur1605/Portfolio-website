const express = require('express');
const app  = express()
const hostName = 'localhost';
const http = 'http';
const port = 3000;
const connectToMongo = require('./database')

// const bodyParser = require('body-parser');



app.listen(port,hostName,()=>{
    console.log(`Server runnig at http://${hostName}:${port}`)
})

connectToMongo()

