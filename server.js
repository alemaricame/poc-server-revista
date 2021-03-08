const express = require('express');
const app = express();

app.get('/heroku', (req, res) => {
	res.send("Probando")
})

app.listen( process.env.PORT ||3000, () => {
	console.log("Server Listen in port ")
})