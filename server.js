const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://<dbuser>:<dbpassword>@ds143191.mlab.com:43191/heroku_5hdlnqjx",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
