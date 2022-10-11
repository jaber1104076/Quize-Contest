import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: "React",
            marks: 4000,
            top: 2400
        },
        {
            name: "Javacripts",
            marks: 3000,
            top: 1398
        },
        {
            name: "Html",
            marks: 2000,
            top: 9800

        },
        {
            name: "CSS",
            marks: 2000,
            top: 9800
        }
    ]
    return (
        <div className='ml-12'>
            <LineChart
                width={500}
                height={500}
                data={data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                <Line type="monotone" dataKey="top" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Statistics;