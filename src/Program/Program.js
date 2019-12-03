import React from 'react';
import './Program.css';

const person = (props) => {
    return (
        <div className="gallery">
            <img className="programImage" src={props.imageUrl} alt={props.imageAltText} onClick={props.clicked} />
            <h2 onClick={props.clicked}>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
};

export default person;