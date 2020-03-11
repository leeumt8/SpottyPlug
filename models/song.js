const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    favorite: {type: Boolean, default: false},
    score: {type: Number, default: 0}
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;