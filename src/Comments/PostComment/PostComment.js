import React from 'react';

const postComments = (props) => {

    return (
        <div>
        <input type="text" onChange={props.onChange} />
        <button onClick={props.clicked}>Comment</button>
        </div>
    );    
}

export default postComments;