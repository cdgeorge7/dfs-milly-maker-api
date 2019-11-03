const express = require("express");
const usernameController = require("../controllers/usernames.controller");

const router = express.Router();

router.get("/username/:username", usernameController.getUsername);

module.exports = router;
