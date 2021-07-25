const express = require("express");
const router = express.Router();
const checkJWT = require('../middlewares/jwt')

router.get("/", checkJWT, (req, res) => {
  res.send("Welcome to the movies zone!");
});

module.exports = router;
