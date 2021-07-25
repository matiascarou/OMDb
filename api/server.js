var express = require("express");
var fs = require("fs");
var app = express();
const db = require("./models/database");
const routes = require("./routes");
var cors = require("cors");
const PORT = process.env.PORT || 3001;
require('./models/associations')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);


db.sync({force: true}).then(() => {
  console.log("Database running");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
