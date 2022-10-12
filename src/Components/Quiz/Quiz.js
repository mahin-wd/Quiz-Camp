import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from '../DisplayQyiz/DisplayQuiz';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizQuestions = quiz.data.questions;
    return (
        <div>
        <h1> Start Your Quiz</h1>
            {
                quizQuestions.map(questions => <DisplayQuiz
                questions={questions}
                key={questions.id}
                ></DisplayQuiz>)
            }
        </div>
    );
};

export default Quiz;