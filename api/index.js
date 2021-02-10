require('dotenv').config();

var compassionRoutes = require('./routes/outreaches');
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.listen(process.env.PORT, ()=>{

    console.log(":-)");
})

app.use('/api/compassion/outreaches/', compassionRoutes);