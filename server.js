

///API Routes
///Require Model
//Use mini project and mongoose documentation 
//((Needs Delete))-Mongoose (https://mongoosejs.com/docs/api.html#query_Query-deleteOne)
// app.PUT (api/workouts + id)
//fetch default is GET 


const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});