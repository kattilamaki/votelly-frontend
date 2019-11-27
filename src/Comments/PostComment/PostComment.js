import React, { Component } from 'react';

class PostComment extends Component {

    render () {
        if (this.props.selectedCharacter !== null) {
            return (
                <div>
                    Comment: <input type="text" />
                    <input type="submit" value="Comment" />
                </div>
            );
        } else {
            return ('Select character to post comment')
        }
    }
}   

export default PostComment;