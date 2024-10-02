const axios = require('axios');

exports.generateVoiceover = async (req, res) => {
    const { text, voiceType } = req.body;

    try {
        const response = await axios.post('https://sarvam-api.com/generate-voiceover', { text, voiceType });
        res.json({ audioFile: response.data.audioFileUrl });
    } catch (error) {
        res.status(500).json({ error: 'Voiceover generation failed' });
    }
};
