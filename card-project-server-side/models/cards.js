const mongoose = require("mongoose");
const cardsSchema = new mongoose.Schema(
    {
    suit: String,
    number: Number,
    description: String,
    location: String,
    date: Date,
    dirty: String,
    imageUrl: String
});

module.exports = mongoose.model("Card", cardsSchema);