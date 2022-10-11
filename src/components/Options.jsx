import React from 'react';
import './Css/Options.css';

const Options = ({ option, handleCorrectAnswer }) => {
    return (
        <div>
            <div className='option'>
                <button onClick={() => handleCorrectAnswer(option)}>{option}</button>
            </div>
        </div>
    );
};

export default Options;