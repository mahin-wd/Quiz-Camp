import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowChart from '../ShowChart/ShowChart';
import './Statistic.css'

const Statistic = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data;
    return (
        <div className='chart'>
            {
                quizes.map(quiz => <ShowChart
                key={quiz.id}
                quiz={quiz}
                ></ShowChart>)
            }
        </div>
    );
};

export default Statistic;