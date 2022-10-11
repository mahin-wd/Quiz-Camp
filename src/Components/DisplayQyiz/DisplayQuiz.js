// import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DisplayQuiz.css';

const DisplayQuiz = ({questions}) => {
    const [ans, setAns] = useState([]);
    const {question, options} = questions;

    const setAnswer = (option) => {
        if(option === questions.correctAnswer){
            toast.success('Correct Answer', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
                const newAns = [...ans, option];
                setAns(newAns);
        }
        else{
            toast.error('Answer Is Wrong', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    const correctAns = () => {
        alert('Correct answer is: ' + (questions.correctAnswer))
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
                            options.map(option => 
                            <label onClick={() => setAnswer(option)}  className='check-ans' htmlFor="">
                            
                            
                            <input className='input' type="radio" value={option} name='ans' />
                                {option}
                            
                            </label>)
                            
                        }
                    </div>
             
                </div>
                <ToastContainer />
            </div>
        );
    
};

export default DisplayQuiz;