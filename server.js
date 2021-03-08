const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


// app.get('/heroku', (req, res) => {
// 	res.send("Probando")
// })

require("./routes/route")(app);


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