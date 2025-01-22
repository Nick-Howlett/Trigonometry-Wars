const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const fetch = require("node-fetch");
const db = require("./config/keys").MongoURI;
const scores = require("./routes/api/scores");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

const corsOptions = {
  origin: ["https://nick-howlett.github.io"],
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/scores", scores);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
