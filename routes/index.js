const express = require("express");
const lineupsController = require("../controllers/lineups.controller");

const router = express.Router();

router.get("/lineups", lineupsController.getLineups);

router.get("/usernames", (req, res) => {
  return res.send("usernames");
});

router.get("/usernames/:username", (req, res) => {
  return res.send(`Data for ${req.params.username}`);
});

module.exports = router;
