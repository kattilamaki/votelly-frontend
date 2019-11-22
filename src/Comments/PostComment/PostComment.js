import React from 'react';

const postComment = (props) => {

    if (props.selectedCharacter !== null) {
        return (
            <div>
                <form>
                    Comment: <input type="text" />
                    <input type="submit" value="Comment" />
                </form>
            </div>
        );
    } else {
        return ('Select ccharacter to post comment')
    }
};

export default postComment;