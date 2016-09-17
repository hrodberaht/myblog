var express = require("express");

var router = express.Router();

var about = require("../controllers/aboutController");

router.get("/about", about);

module.exports = router;