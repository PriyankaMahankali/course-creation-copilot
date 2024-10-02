const express = require('express');
const { generateVoiceover } = require('../controllers/voiceoverController');
const router = express.Router();

router.post('/', generateVoiceover);

module.exports = router;
