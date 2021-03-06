import React from 'react';
import classes from './Character.css';

const character = props => {
  return (
    <div className="character">
      <h3 onClick={props.clicked}>{props.name}</h3>
      <img
        className="characterImage"
        src={props.imageUrl}
        alt={props.imageAltText}
        onClick={props.clicked}
      />
      <p>{props.description}</p>
      <button onClick={props.voted}>Vote!</button>
    </div>
  );
};

export default character;
