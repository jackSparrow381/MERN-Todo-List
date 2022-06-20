const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

// use express.json() to get data in json format
app.use(express.json());
//port
const PORT = process.env.PORT || 5000;

// user cors
app.use(cors());

// let import the routes
const TodoItemsRoute = require("./routes/todoItems");

// Lets connect to monogoDB ...
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));


// use the routes
app.use("/", TodoItemsRoute);

// Add port and connect to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
