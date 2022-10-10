import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src="quiz.png" alt="" />
            <div>
                <h2>Are you ready for the quiz?</h2>
            </div>
        </div>
    );
};

export default Header;