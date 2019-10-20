import React from 'react';
import './Program.css';

const person = (props) => {
    return (
        <div className="Program">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
};

export default person;