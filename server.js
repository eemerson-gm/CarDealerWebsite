
//Imports the required libraries to connect to the frontend and database.
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

//Imports the cryptography functions.
const { encrypt, decrypt } = require('./crypto');

//Express and MongoDB connection information.
const app = express();
const port = process.env.PORT || 5000;
const url = "mongodb+srv://eemerson:Conestoga1@clustercarapp.y2dss.mongodb.net/cardatabase?authSource=admin&retryWrites=true&w=majority";

//Required to parse information sent from the frontend React.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
//
//ACCOUNT LOGIN FUNCTION
//
//
app.post('/api/login', (req, res) => {

  //Connects to the database to insert the account information.
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {

    //Gets the database from the client.
    const db = client.db("cardatabase");

    //Inserts the account information into the database.
    db.collection("accounts").findOne({username: req.body.username}, function(err, result){

      //Checks if the password are equal.
      if(decrypt(result.password) == req.body.password){
        
        res.send("Passwords are equal!");

      }else{

        res.send("Passwords are not equal!");

      }

    });

    //Logs the inserted content in the console.
    console.log(req.body);

  });

});

//
//
//ACCOUNT SIGNUP FUNCTION
//
//
app.post('/api/signup', (req, res) => {

  //Encrypts the password for the body.
  req.body.password = encrypt(req.body.password);

  //Connects to the database to insert the account information.
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {

    //Gets the database from the client.
    const db = client.db("cardatabase");

    //Inserts the account information into the database.
    db.collection("accounts").insertOne(req.body);

    //Logs the inserted content in the console.
    console.log(req.body);

  });

  res.send("Account has been created!");

});

/*connect car api*/
/*******************************************************************/
var Task = require('./api/models/car'),
    mongoose = require('mongoose');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(url); 

const cars = require('./api/routes/carRoutes');
cars(app);
/*******************************************************************/

//Starts the NodeJS server.
app.listen(port, () => console.log(`Listening on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
