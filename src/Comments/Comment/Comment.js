import React from 'react';
import classes from './Comment.css';

const comment = (props) => {

    return (
        <div className={classes.Comment}>
        <p>{props.commentText}</p>
        <p>{props.commentTime}</p>
        </div>
    );
};

export default comment;