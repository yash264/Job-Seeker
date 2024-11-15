const express = require("express");
const app = express()
const port = require("port");
const PORT = process.env.port || 4000;
require("./db/connection");



app.listen(port,(req,res)=>{
    console.log(`Server is running at ${PORT}`);
})