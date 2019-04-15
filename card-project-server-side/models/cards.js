const mongoose = require("mongoose")
const cardSchema = new mongoose.Schema
({

    suit: {type: String, required: true, unique: true},
    value: String,
    description: String,
    locationDiscovered: {type: String, required: true},
    dateDiscovered: Date,
    whoFoundIt: String,
    filth: String,
    imageUrl: String

});

module.exports = mongoose.model("card", cardSchema);