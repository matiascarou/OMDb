const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const checkJWT = require("../middlewares/jwt");
const { Op } = require("sequelize");
const Favorite = require("../models/favorites");

router.get("/users/:username", function (req, res) {
  User.findOne({
    where: { username: req.params.username },
    include: [
      {
        model: Favorite,
        // as: 'User_favorites', //
      },
    ],
  }).then((singleUser) => res.status(200).send(singleUser));
});

router.get("/users/:id", function (req, res) {
  User.findByPk(req.params.id).then((user) => res.status(200).send(user));
});

router.post("/register", (req, res, next) => {
  const { username, email } = req.body;

  User.findOrCreate({
    where: { [Op.or]: [{ username }, { email }] },
    defaults: req.body,
  })
    .then((user) => {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        "fidelio"
      );
      user[1]
        ? res.status(201).json({ user: user[0], token })
        : res.status(400).send("User Already Exists!");
    })
    .catch(next);
});

//AUTENTICACION

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ where: { username } }).then((user) => {
    if (!user)
      return res.status(400).send("Username does not exists, please try again");
    if (!user.validPassword(password))
      return res.status(401).send("Password incorrect, please try again");

    const token = jwt.sign({ id: user.id, username: user.username }, "fidelio");
    return res.status(200).json({ user, token });
  });
});

module.exports = router;
