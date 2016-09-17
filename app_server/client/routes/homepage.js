var express = require("express");

var router = express.Router();

var homepageController = require("../controllers/homepageController");

router.get("/", homepageController);

module.exports = router;