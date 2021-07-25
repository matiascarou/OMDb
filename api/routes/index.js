const express = require("express");
const router = express.Router();
const movies = require('./movies');
const users = require("./users");
const auth = require('./auth')

router.use("/movies", movies);
router.use("/auth", auth);
router.use("/", users);

module.exports = router;
