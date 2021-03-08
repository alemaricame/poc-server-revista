const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


// app.get('/heroku', (req, res) => {
// 	res.send("Probando")
// })

require("./routes/route")(app);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');
   
    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  };
  
  app.use(allowCrossDomain);
  
mongoose.connect('mongodb+srv://admin:admin@cluster0.xp3qr.mongodb.net/poc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected', () => {
    console.log('mongose is connected')
})

// app.use(morgan('tiny'));
//app.use('/api', routes);

app.listen( process.env.PORT ||3000, () => {
	console.log("Server Listen in port ")
})