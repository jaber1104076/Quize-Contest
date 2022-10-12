import React from 'react';
import { Link } from 'react-router-dom';
import './Css/SingleQuize.css'

const SingleQuize = ({ quize, handleTest }) => {
    const { name, id, logo, total } = quize;
    return (
        <div className='quize'>
            <img src={logo} alt="" />
            <div className='info'>
                <h4>Name : {name} </h4>
                <p>Total Quize : {total}</p>
            </div>
            <Link preventScrollReset={true} to={`quize/${id}`}><button onClick={() => handleTest()}>Take the Test</button></Link>
        </div>
    );
};

export default SingleQuize;