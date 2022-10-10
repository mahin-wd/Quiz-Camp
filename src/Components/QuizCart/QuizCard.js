import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({quiz}) => {
    const {id, name, logo} = quiz;

    return (
        <div className='quiz-card'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <Link to={`/quiz/${id}`}>
                <button>Start Quiz Now</button>
            </Link>
        </div>
    );
};

export default QuizCard;