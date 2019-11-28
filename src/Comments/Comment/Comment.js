import React from 'react';
import classes from './Comment.css';

const comment = (props) => {

    return (
        <div className={classes.Comment}>
        <p>{props.commentTime}</p>
        <p>{props.commentText}</p>
        </div>
    );
};

export default comment;