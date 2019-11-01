import React from 'react';

const person = (props) => {
    return (
        <div className="Program">
            <h1
            onClick={props.clicked}>
            {props.name}
            </h1>
            <p>{props.description}</p>
            <p>{props.programId}</p>
        </div>
    )
};

export default person;