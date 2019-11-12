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
        if (this.state.selectedCharacter !== this.props.id) {
            axios.get('http://localhost:8000/api/character/' + this.props.id + '/comments/')
            .then(response => {
            this.setState({comments: response.data.data, 
                selectedCharacter: this.props.id,
                selectedProgram: this.props.selectedProgram});
            })
        }
        console.log('Comments componentDidUpdate');
    }

    render() {

        if (this.state.comments && this.state.selectedCharacter !== null) {
            const comments = this.state.comments.map(comment => {
                return (
                    <div>
                        <Comment
                        commentText={comment.comment_text}
                        commentTime={comment.comment_time}
                        key={comment.id} />
                    </div>
                ) 
            });

            return (
            <div>{comments}</div>
            )
        }
        else {
            return(<p>Select character to show comments</p>)
        }
}
};

export default Comments;