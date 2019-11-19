import React from 'react';
import './Program.css';

const person = (props) => {
    return (
        <div className="Program">
            <h1
            onClick={props.clicked}>
            {props.name}
            </h1>
            <img class="programImage" src={props.imageUrl} alt={props.imageAltText} onClick={props.clicked} />
            <p>{props.description}</p>
            <p>{props.relatedProgram}</p>
        </div>
    )
};

export default person;