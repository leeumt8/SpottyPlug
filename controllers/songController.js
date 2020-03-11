const db = require("../models");

module.exports = {
    createSong: function(req,res) {
        db.Song
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    showAll: function(req,res) {
        db.Song
        .find(req.query)
        .sort({name: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    showFavorites: function(req,res) {
        db.Song
        .find({favorite: "true"})
        .sort({name: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    showLeaders: function(req,res) {
        db.Song
        .find(req.query)
        .sort({score: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};