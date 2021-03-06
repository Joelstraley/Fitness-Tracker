const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models/workout");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
  useFindAndModify: false
}) .then((result) => app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  }))
.catch((err) => console.log(err)); 

