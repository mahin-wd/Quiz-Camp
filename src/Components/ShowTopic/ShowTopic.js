import React from 'react';
import './ShowTopic.css'

const ShowTopic = ({quiz}) => {
    const {name, logo} = quiz;
    return (
        <div className='container'>
            <div className='topic'>
                 <img src={logo} alt="" />
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default ShowTopic;