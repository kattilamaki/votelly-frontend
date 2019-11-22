import React, { Component } from 'react';
import axios from 'axios';
import Comment from '../Comments/Comment/Comment';

class Comments extends Component {

    state = {
        comments: null,
        selectedCharacter: null,
        selectedProgram: null
    }

    componentDidUpdate() {
        if (this.state.selectedCharacter !== this.props.selectedCharacter) {
            axios.get('http://localhost:8000/api/character/' + this.props.selectedCharacter + '/comments/')
            .then(response => {
            this.setState({comments: response.data.data, 
                selectedCharacter: this.props.selectedCharacter,
                selectedProgram: this.props.selectedProgram});
            })
        }
    }

    render() {

        if (this.state.comments && this.props.showComments) {
            const comments = this.state.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <Comment
                        commentText={comment.comment_text}
                        commentTime={comment.comment_time} />
                    </div>
                ) 
            });

            return (
            <div>
                {comments}
            </div>
            )
        }
        else {
            return(<p>Select character to show comments</p>)
        }
    }
};

export default Comments;