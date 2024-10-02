import React, { useState } from 'react';
import axios from 'axios';

function QuizGenerator() {
    const [lectureNotes, setLectureNotes] = useState('');
    const [quiz, setQuiz] = useState(null);
    const [error, setError] = useState(null);

    const generateQuiz = async () => {
        try {
            const response = await axios.post('/api/quiz', { lectureNotes });
            setQuiz(response.data.quiz);
            setError(null);
        } catch (error) {
            setError('Failed to generate quiz');
        }
    };

    return (
        <div>
            <h2>Generate Quiz</h2>
            <textarea
                value={lectureNotes}
                onChange={(e) => setLectureNotes(e.target.value)}
                placeholder="Paste lecture notes here..."
                rows={5}
            />
            <button onClick={generateQuiz}>Generate Quiz</button>
            {quiz && <div>{JSON.stringify(quiz)}</div>}
            {error && <div>{error}</div>}
        </div>
    );
}

export default QuizGenerator;
