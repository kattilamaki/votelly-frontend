import React from 'react';
import './Program.css';

const person = (props) => {
    return (
        <div className="gallery">
            <img className="programImage" src={props.imageUrl} alt={props.imageAltText} onClick={props.clicked} />
            <h1 onClick={props.clicked}>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.relatedProgram}</p>
        </div>
    )
};

export default person;