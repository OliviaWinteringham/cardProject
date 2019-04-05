'use strict';

var mongoose = require("mongoose");

var cardSchema = new mongoose.Schema({
    suit: { type: String, required: true },
    value: Number,
    description: { type: String, required: true },
    locationFound: { type: String, required: true },
    date: Date,
    whoFoundIt: String,
    filth: Number,
    imageURL: String,
});
module.exports = mongoose.model("card", cardSchema);