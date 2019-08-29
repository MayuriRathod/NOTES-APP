const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// create express app
const app = express();


var originsWhitelist = [
    'http://localhost:5000'      
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  //here is the magic
  app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome..!"});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});