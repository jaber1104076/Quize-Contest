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
                <h1 className='quize-head2'>Quize of: {quizeName}</h1>
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