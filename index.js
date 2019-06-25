console.log("Starting NodeJS REST MongoDb service...")

let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let express = require('express')
let app = express();
var port = process.env.PORT || 8085;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, function () {
     console.log("Running MongoREST on port " + port);
});

let apiRoutes = require("./app/api-routes")
app.use('/api', apiRoutes)



// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/realheadline', {useNewUrlParser: true});
var db = mongoose.connection;


/* const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    
  }) */