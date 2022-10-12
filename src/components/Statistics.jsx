import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: "React",
            total: 8,
            top: 2400
        },
        {
            name: "Javacripts",
            total: 9,
            top: 1398
        },
        {
            name: "Html",
            total: 8,
            top: 9800

        },
        {
            name: "CSS",
            total: 11,
            top: 9800
        }
    ]
    return (
        <div className='ml-12 mt-32 mb-8'>
            <LineChart
                width={500}
                height={500}
                data={data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Line type="monotone" dataKey="top" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Statistics;