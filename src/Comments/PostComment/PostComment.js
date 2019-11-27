import React from 'react';

const postComments = (props) => {

    return (
        <div>
        <input type="text" value={props.inputValue} onChange={props.onChange} />
        <button onClick={props.clicked}>Comment</button>
        </div>
    );    
}

export default postComments;