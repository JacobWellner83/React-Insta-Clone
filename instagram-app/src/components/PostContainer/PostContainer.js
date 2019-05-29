import React from 'react'
import PropTypes from 'prop-types';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({ comments, ...post }) => {
    return (
        <div>
            PostContainer
            <Post {...post} />
            <CommentSection comments={comments} />
        </div>
    );
};

PostContainer.propTypes = {
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;