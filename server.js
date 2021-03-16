const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const db = require("./models/workout");

///API Routes
///Require Model
//Use mini project and mongoose documentation 
//((Needs Delete))-Mongoose (https://mongoosejs.com/docs/api.html#query_Query-deleteOne)
// app.PUT (api/workouts + id)

//fetch default is GET 


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// routes
/* require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
 */
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
}) .then((result) => app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  }))
.catch((err) => console.log(err)); 

/* app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
}); */

