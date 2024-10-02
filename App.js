import React from 'react';
import QuizGenerator from './components/QuizGenerator';
import Translator from './components/Translator';
import Voiceover from './components/Voiceover';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Course Creation Copilot</h1>
            <QuizGenerator />
            <Translator />
            <Voiceover />
        </div>
    );
}

export default App;
