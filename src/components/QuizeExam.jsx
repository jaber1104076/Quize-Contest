import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizStatus from './QuizStatus';
import './Css/QuizeExam.css';

const QuizeExam = () => {
    const quizesData = useLoaderData()
    const quizes = quizesData.data.questions;
    const quizeName = quizesData.data.name;
    // console.log(quizes)
    return (
        <div className='mt-12'>
            <div className='quizehead'>
                <h3 className='text-3xl text-cyan-400'>Grow your skills, be Confident</h3>
                <h1 className='text-4xl text-green-800 bold font-bold'>Quize of : {quizeName}</h1>
            </div>
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