const express = require('express');
const { translateContent } = require('../controllers/translateController');
const router = express.Router();

router.post('/', translateContent);

module.exports = router;
