const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 4000;

app.get("/healthCheck", async(req,res)=>{
    console.log("it works");
    res.send({status: 'Success'})
})

app.listen(port, ()=>{
    console.log("Server started... at 3000 port")
})