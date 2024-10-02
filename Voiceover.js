import React, { useState } from 'react';
import axios from 'axios';

function Voiceover() {
    const [text, setText] = useState('');
    const [voiceType, setVoiceType] = useState('male');
    const [audioFile, setAudioFile] = useState('');
    const [error, setError] = useState(null);

    const generateVoiceover = async () => {
        try {
            const response = await axios.post('/api/voiceover', { text, voiceType });
            setAudioFile(response.data.audioFile);
            setError(null);
        } catch (error) {
            setError('Error generating voiceover');
        }
    };

    return (
        <div>
            <h2>Generate Voiceover</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text for voiceover..."
                rows={5}
            />
            <select value={voiceType} onChange={(e) => setVoiceType(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button onClick={generateVoiceover}>Generate Voiceover</button>
            {audioFile && <audio controls src={audioFile}></audio>}
            {error && <div>{error}</div>}
        </div>
    );
}

export default Voiceover;
