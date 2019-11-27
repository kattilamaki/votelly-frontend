import React, { Component } from 'react';
import axios from 'axios';
import Comment from '../Comments/Comment/Comment';
import PostComment from '../Comments/PostComment/PostComment';

class Comments extends Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
      }

    state = {
        comments: null,
        selectedCharacter: null,
        selectedProgram: null,
        commentText: "",
        newComments: false
    }

    componentDidUpdate() {
        if (this.state.selectedCharacter !== this.props.selectedCharacter || this.state.newComments) {
            axios.get('http://localhost:8000/api/character/' + this.props.selectedCharacter + '/comments/')
            .then(response => {
            this.setState({comments: response.data.data, 
                selectedCharacter: this.props.selectedCharacter,
                selectedProgram: this.props.selectedProgram,
                newComments: false});
            })
        }
    }

    commentCharacter = (event) => {
        const now = new Date();
        const payload = {
            "comment_text": this.state.commentText,
            "related_character": this.props.selectedCharacter,
            "comment_time": now
        }
        axios.post('http://localhost:8000/api/character/' + this.props.selectedCharacter
        + '/comments/', payload)
        .then(response => {
            this.setState({newComments: true})
        })
        .catch(error => {
            console.log(error);
        });
    }

    onChange(event) {
        this.setState({commentText: event.target.value})
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
                onChange={this.onChange}
                clicked={this.commentCharacter} 
                />
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