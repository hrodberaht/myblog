var express = require('express');

var router = express.Router();

var page404 = require('../controllers/page404Controller');

router.use(page404);

module.exports = router;