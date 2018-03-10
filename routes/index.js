const express = require('express');
const route = express.Router();

route.get('/', (req,res)=>{
    res.send("Here i am");
});

module.exports = route;