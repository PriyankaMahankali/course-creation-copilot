import React, { useState } from 'react';
import axios from 'axios';

function Translator() {
    const [content, setContent] = useState('');
    const [language, setLanguage] = useState('hi');
    const [translatedContent, setTranslatedContent] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const translate = async () => {
        setLoading(true);
        setError(null); // Reset error before making the request
        try {
            const response = await axios.post('/api/translate', { content, targetLanguage: language });
            setTranslatedContent(response.data.translatedContent);
        } catch (error) {
            setError('Translation failed');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <h2>Translate Content</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content to translate..."
                rows={5}
            />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
            </select>
            <button onClick={translate} disabled={loading}>
                {loading ? 'Translating...' : 'Translate'}
            </button>
            {translatedContent && <div><strong>Translated Content:</strong> {translatedContent}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default Translator;
