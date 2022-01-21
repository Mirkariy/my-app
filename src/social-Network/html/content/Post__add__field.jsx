import React from 'react';
import PropTypes from 'prop-types';
import '../../css/content/Content.css';

const PostAddField = ({ kurwaContainer, onPostChangeContainer, newPostText }) => {
  const textContent = React.createRef();

  const kurwa = () => {
    kurwaContainer();
  };

  const onPostChange = () => {
    const text = textContent.current.value;
    onPostChangeContainer(text);
  };

  return (
    <div className="post__add">
      My posts
      <textarea className="post-add__field" onChange={onPostChange} ref={textContent} value={newPostText} />
      <button type="button" onClick={kurwa}>Add</button>
      <button type="button" onClick={kurwa}>Remove</button>
    </div>
  );
};

PostAddField.propTypes = {
  kurwaContainer: PropTypes.func.isRequired,
  onPostChangeContainer: PropTypes.func.isRequired,
  newPostText: PropTypes.string.isRequired,
};

export default PostAddField;
