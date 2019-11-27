import React, { Component } from 'react';
import axios from 'axios';

class PostComment extends Component {

    state = {
        commentText: null,
    }

    postComment = () => {
        const now = new Date();
        const payload = {
            "comment_text": this.state.commentText,
            "related_character": this.props.selectedCharacter,
            "comment_time": now
        }
        axios.post('http://localhost:8000/api/character/' + this.props.selectedCharacter
        + '/comments/', payload)
        .then(response => {
            this.setState( {postCommment: false});
        })
        .catch(error => {
            console.log(error);
        });
    }

    initCommentHandler = (event) => {
         this.setState ({
            commentText: event.target.value,
         })
    }

    render () {
        if (this.props.selectedCharacter !== null) {
            return (
                <div>
                <input type="text" onChange={this.initCommentHandler} />
                <button onClick={() => this.postComment()}>Comment</button>
                </div>
            );
        } else {
            return ('Select character to post comment')
        }
    }
}   

export default PostComment;