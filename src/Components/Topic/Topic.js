import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowTopic from './../ShowTopic/ShowTopic';

const Topic = () => {
    const allQuiz = useLoaderData();
    const quizes = allQuiz.data;
    return (
        <div>
            {
                quizes.map(quiz => <ShowTopic key={quiz.id} quiz={quiz}></ShowTopic>)
            }
        </div>
    );
};

export default Topic;