import React from 'react';

const postComments = (props) => {
    
    return (
        <div>
        <input type="text" onChange={props.getComment} />
        <button onClick={props.postComment}>Comment</button>
        </div>
    );    
}

export default postComments;