var express = require("express");
var router = express.Router();
var Card = require("../models/cards");

router.get("/", async function(req, res, next) {
  try {
    const cards = await Card.find();
    res.json({ payload: cards });
  } catch (err) {
    next({err, message: 'something went wrong'});
  }
});


router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const cards = new Card(req.body);
    await cards.save();
    res.status(201).json({ payload: { cards } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error creating card", error: err });
  }
});

module.exports = router;
