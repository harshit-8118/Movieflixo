const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const moviesRoute = require('./routes/movies');
const listsRoute = require('./routes/lists');

mongoose
  .connect(process.env.MONGO_URL, { })
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err));


app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/movies', moviesRoute);
app.use('/api/lists', listsRoute);


app.listen(5500, () => {
  console.log("backend server is running");
});
