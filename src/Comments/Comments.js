import React, { Component } from 'react';
import axios from 'axios';
import Comment from '../Comments/Comment/Comment';
import PostComment from '../Comments/PostComment/PostComment';

class Comments extends Component {

    state = {
        comments: null,
        selectedCharacter: null,
        selectedProgram: null,
        commentText: null
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

    postComment = (event) => {
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
                <PostComment
                postComment={(event) => this.postComment}
                getComment={(event) => this.initCommentHandler} />
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