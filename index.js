var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");
mongoose = require("mongoose");
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
require("./routes/routes")(app);

const db = require("./models");
const http = require("http");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
  })
  .catch(err => {

    process.exit();
  });

app.use(router);


var cors = require('cors')
app.use(cors())

app.set('port', 3000);

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});


// server.listen(3000, 'https://poc-server-revista.herokuapp.com', () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

// server.on('clientError', (err, socket) => {
//   console.error(err);
//   socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });

