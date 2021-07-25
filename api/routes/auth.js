const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Favorite = require("../models/favorites");
const jwt = require("jsonwebtoken");
const checkJWT = require("../middlewares/jwt");

router.get("/users", checkJWT, function (req, res) {
  res.status(200).send(true);
});

router.post("/favorites", (req, res, next) => {
  let { userId, movieId } = req.body;
  Favorite.create({ movieId: movieId }).then((singleMovie) => {
    User.findByPk(userId).then((user) => {
      user.addFavorites(singleMovie);
      res.send(singleMovie);
    });
  });
});

router.get("/", checkJWT, function (req, res) {
  console.log(req.user);
  User.findByPk(req.user.id, { include: Favorite }).then((user) => {
    res.status(200).send(user);
  });
});

// router.delete("/favorites", checkJWT, function (req, res) {
//   const { userId, movieId } = req.body
//   User.findByPk(userId, { include: Favorite })
//   .then((user) => {
//     Favorite.removeUsers(user)
//     res.send(200)
//   })
// });

// router.get("/:id", checkJWT, function (req, res) {
//   console.log(req.params)
//   User.findByPk(req.params.id, { include: Favorite }).then((user) =>
//     res.status(200).send(user)
//   );
// });

// router.post("/favorites", (req, res, next) => {
//   console.log(req.body);
//   let { userId, movieId } = req.body;
//   Favorite.create({ movieId: movieId }).then((singleMovie) => {
//     User.findByPk(userId).then((user) => {
//       user.addFavorites(singleMovie);
//       res.send(singleMovie);
//     });
//   });
// });

module.exports = router;
