import React from 'react';
// import classes from './Progress.css';

const progress = (props) => {

    return (
        <div>
        <p>{props.characterName}:
        <progress value={props.voteCount} max={props.totalVotes}></progress></p>
        </div>
    );
};

export default progress;