var express = require('express');
var router = express.Router();
var cards = require ("../models/cards")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   const cards = cards.find({})
//   res.json({ payload: cards });
// });
router.get('/', function(req, res, next) {
  cards.find(function (err, cards) {
    if (err) return next(err);
    res.json({payload: cards});
  });
});


module.exports = router;


/// get all the players
// router.get("/", (req, res, next) => {
//   const players = await player.find({});
//   res.json({ payload: players });
// });