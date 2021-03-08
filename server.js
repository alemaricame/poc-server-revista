const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


// app.get('/heroku', (req, res) => {
// 	res.send("Probando")
// })

require("./routes/route")(app);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://poc-server-heroku.herokuapp.com/api/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

mongoose.connect('mongodb+srv://admin:admin@cluster0.xp3qr.mongodb.net/poc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected', () => {
    console.log('mongose is connected')
})

app.use(morgan('tiny'));
//app.use('/api', routes);

app.listen( process.env.PORT ||3000, () => {
	console.log("Server Listen in port ")
})