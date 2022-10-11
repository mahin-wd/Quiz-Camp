// import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './DisplayQuiz.css';

const DisplayQuiz = ({questions}) => {
    const {question, options} = questions;
    // console.log(questions);

    const correctAns = () => {
        alert('Correct answer is: ' + (questions.correctAnswer))
    }

    const chooseAnswer = (option) => {
        alert()
    }

        return (

            <div>
                <div className='questions'>
            
                    <h3>{question}</h3>

                    <div>
                        <EyeIcon onClick={correctAns} className='view'></EyeIcon>
                    </div>
                
                    <div className='choose-btn'>
                        {
                            options.map(option => <button key={question.id} onClick={() => chooseAnswer(option)}>
                                {option}
                            </button>)
                        }
                    </div>
             
                </div>
            </div>
        );
    
};

export default DisplayQuiz;