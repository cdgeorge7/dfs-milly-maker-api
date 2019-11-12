const express = require("express");
const usernameController = require("../controllers/usernames.controller");

const router = express.Router();

router.get("/username/:username", usernameController.getUsernameData);
router.get("/usernames/:weekYear", usernameController.getUsernameList);

module.exports = router;
