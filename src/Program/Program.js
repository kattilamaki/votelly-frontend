import React from 'react';
import './Program.css';

const person = props => {
  return (
    <div className="program-card">
      <img
        className="program-card-image"
        src={props.imageUrl}
        alt={props.imageAltText}
        onClick={props.clicked}
      />
      <h2 className="program-card-name" onClick={props.clicked}>
        {props.name}
      </h2>
      <p className="program-card-description">{props.description}</p>
    </div>
  );
};

export default person;
