import React from 'react';
import './Css/QuizStatus.css';
import Options from './Options';
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const QuizStatus = ({ quize }) => {
    const { options, question, correctAnswer, id } = quize;
    //console.log(quize);

    const handleIcon = () => {
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
                <h4>Quetion :{question}</h4>
                <div className='icon'><span onClick={() => handleIcon(id)}><EyeSlashIcon className="h-6 w-6 mt-4  text-cyan-500" /></span></div>
            </div>
            {/* <div className='icon'><span onClick={() => handleIcon(id)}><EyeSlashIcon className="h-6 w-6  text-cyan-500" /></span></div> */}
            <div>
                {
                    options.map((option, idx) => <Options
                        option={option}
                        key={idx}
                        handleCorrectAnswer={handleCorrectAnswer}
                    ></Options>)
                }
            </div>

        </section>

    );
};

export default QuizStatus;