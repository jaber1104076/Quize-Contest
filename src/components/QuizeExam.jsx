import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizStatus from './QuizStatus';
import './Css/QuizeExam.css';

const QuizeExam = () => {
    const quizesData = useLoaderData()
    const quizes = quizesData.data.questions;
    //console.log(quizes)
    return (
        <div>
            <h3 className='text-center text-3xl text-cyan-700'>Grow your skills, be Confident</h3>
            <div className='quizeexam'>
                {
                    quizes.map(quize => <QuizStatus
                        key={quize.id}
                        quize={quize}
                    ></QuizStatus>)
                }
            </div>
        </div>
    );
};

export default QuizeExam;