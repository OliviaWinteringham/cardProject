const mongoose = require("mongoose");
const cardsSchema = new mongoose.Schema(
    {
    suit: {type: String, required: true, unique: true},
    number: Number,
    description: String,
    location: {type: String, required: true},
    date: Date,
    dirty: String,
    imageUrl: String
});

module.exports = mongoose.model("Card", cardsSchema);