import React from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
    return (
        <div className='text-center mt-24'>
            <Link
                to='/'
                className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
            >
                Back to Homepage
            </Link>
        </div>
    );
};

export default Topics;