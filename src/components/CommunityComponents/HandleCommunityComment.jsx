import React from 'react';

const HandleCommunityComment = ({posts}) => {
    const {postId, likes, comments } = posts ;
    return (
        <div>
            <h1>this is handle community {postId}</h1>
        </div>
    );
};

export default HandleCommunityComment;