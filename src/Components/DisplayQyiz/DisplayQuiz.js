import React, { useState } from 'react';
import './DisplayQuiz.css';

const DisplayQuiz = ({questions}) => {
    const {question, options} = questions;

    
    const chooseAnswer = (option) => {
        
    }

        return (

            <div>
                <div className='quistions'>
            
                    <h3>{question}</h3>
                
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