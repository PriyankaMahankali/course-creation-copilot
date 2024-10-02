const axios = require('axios');

exports.translateContent = async (req, res) => {
    const { content, targetLanguage } = req.body;

    try {
        const response = await axios.post('https://sarvam-api.com/translate', { content, language: targetLanguage });
        res.json({ translatedContent: response.data.translatedText });
    } catch (error) {
        res.status(500).json({ error: 'Translation failed' });
    }
};
