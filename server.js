
const { mongo } = require('mongoose')
const express = require('express')
const app = express()
const morgan = require('morgan')

const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });


///Routes/Controller folder 
//    - with API routes /
//     - view routes

///Views folder with HTML files
////fs.Pathfile.

///API Routes
///Require Model
//Use mini project and mongoose documentation 
//((Needs Delete))-Mongoose (https://mongoosejs.com/docs/api.html#query_Query-deleteOne)
// app.PUT (api/workouts + id)
//fetch default is GET 

///Models folders
///use Seeds for each model
//

///View Routes






const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});