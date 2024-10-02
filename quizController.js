const axios = require('axios');

exports.generateQuiz = async (req, res) => {
    const { lectureNotes } = req.body;

    try {
        const response = await axios.post('https://sarvam-api.com/generate-quiz', { notes: lectureNotes });
        res.json({ quiz: response.data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate quiz' });
    }
};
