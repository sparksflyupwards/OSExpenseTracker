require('dotenv').config();

var cors = require('cors')
var outreachesRoutes = require('./routes/outreaches');
var expensesRoutes = require('./routes/expenses');

var express = require('express'),
app = express(),
bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//allow cross server traffic
app.use(cors())

app.listen(process.env.PORT, ()=>{

    console.log(":-)");
})

app.use('/api/compassion/outreaches/', outreachesRoutes);
app.use('/api/compassion/expenses/', expensesRoutes);