import React from 'react';
import classes from './Character.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.numberOfVotes}</p>
        <button>Vote!</button>
        </div>
    );
};

export default person;