const express = require("express");
const lineupsController = require("../controllers/lineups.controller");
const usernameController = require("../controllers/usernames.controller");

const router = express.Router();

router.get("/lineups", lineupsController.getLineups);

//router.get("/username", usernameController.getUsername);

router.get("/username/:username", usernameController.getUsername);

module.exports = router;
