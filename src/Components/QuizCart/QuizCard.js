import React from 'react';
import './QuizCard.css'

const QuizCard = ({quiz}) => {
    const {id, name, logo} = quiz;
    return (
        <div className='quiz-card'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <button>Start Quiz Now</button>
        </div>
    );
};

export default QuizCard;