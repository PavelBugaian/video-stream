const config = require("config");
const mongoose = require("mongoose");
const usersRoute = require("./routes/user.route");
const express = require("express");
const app = express();
require('dotenv').config();

if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

const { MONGO_USER, MONGO_PASSWORD } = process.env;
const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@main.qonxcua.mongodb.net/?retryWrites=true&w=majority;`;
console.log(process.env);
console.log(mongoUrl);

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/users", usersRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
