import React from 'react';
import classes from './Character.css';

const character = (props) => {

    return (
        <div className={classes.Person}>
        <h2 onClick={props.clicked}>{props.name}</h2>
        <img className="characterImage" src={props.imageUrl} alt={props.imageAltText} onClick={props.clicked} />
        <p>{props.description}</p>
        <p>{props.numberOfVotes}</p>
        <button onClick={props.voted}>Vote!</button>
        </div>
    );
};

export default character;