<<<<<<< HEAD
const mongoose = require("mongoose")
const cardSchema = new mongoose.Schema({

    suit: {type: String, required: true, unique: true},
    value: String,
    description: String,
    locationDiscovered: {type: String, required: true},
    dateDiscovered: Date,
    whoFoundIt: String,
    filth: String,
    imageUrl: String

});

=======
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
>>>>>>> 818396aa13f324f260b27465e1554f58e3a74c9f
module.exports = mongoose.model("card", cardSchema);