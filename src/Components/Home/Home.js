import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizCard from '../QuizCart/QuizCard';
import './Home.css'

const Home = () => {
    const quizTopic = useLoaderData();
    const quizes = quizTopic.data;
    
    return (
        <div>
            <div className='header-part'>
                <Header></Header>
            </div>
            <div className='quiz-container'>
        {
            quizes.map(quiz => <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            ></QuizCard>)
        }
        </div>
        </div>
    );

};

export default Home;