import React from 'react';
import './Css/QuizStatus.css';
import Options from './Options';
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const QuizStatus = ({ quize }) => {
    const { options, question, correctAnswer, id } = quize;
    console.log(quize);

    const handleIcon = (id) => {
        toast(`${correctAnswer}`, { autoClose: 1000 })
    }
    const handleCorrectAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success('correct Answer', { autoClose: 500 })
        }
        else {
            toast.error('wrong answer', { autoClose: 300 })
        }
    }
    return (
        <section className='overall'>
            <div className='quizestatus'>
                <h4>{question}</h4>
            </div>
            <p ><span onClick={() => handleIcon(id)}><EyeSlashIcon className="h-6 w-6 ml-52 text-cyan-500" /></span></p>
            <div>
                {
                    options.map(option => <Options
                        option={option}
                        handleCorrectAnswer={handleCorrectAnswer}
                    ></Options>)
                }
            </div>

        </section>

    );
};

export default QuizStatus;