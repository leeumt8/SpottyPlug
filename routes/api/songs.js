const router = require("express").Router();
const songController = require("../../controllers/songController");

router.route("/all")
    .get(songController.showAll);

router.route("/")
    .post(songController.createSong);

router.route("/leaderboard")
    .get(songController.showLeaders);

router.route("/favorites")
    .get(songController.showFavorites);

module.exports = router;