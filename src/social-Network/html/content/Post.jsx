/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/content/Content.css';

const Post = ({ message }) => (
  <div>
    <div
      className="post"
      onMouseOver="console.log('Это работает')"
      onMouseOut="console.log('Это работает')"
    >
      <img className="autor-avatar" src="https://tlgrm.ru/_/stickers/f2a/96c/f2a96c37-591c-3df8-9cd7-859db5f06466/2.jpg" alt="" />
      {message}
    </div>
  </div>
);

Post.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Post;
