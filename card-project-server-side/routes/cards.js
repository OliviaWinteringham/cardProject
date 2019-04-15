var express = require("express");
var router = express.Router();
var Card = require("../models/cards");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   const cards = cards.find({})
//   res.json({ payload: cards });
// });
router.get("/", async function(req, res, next) {
  try {
    const cards = await Card.find();
    res.json({ payload: cards });
  } catch (err) {
    next({err, message: 'something went wrong'});
  }
});

router.post("/", async function(req, res, next) {
  const card = new Card(req.body);
  await card.save();
  res.json({ payload: card });
});

module.exports = router;

/// get all the players
// router.get("/", (req, res, next) => {
//   const players = await player.find({});
//   res.json({ payload: players });
// });
