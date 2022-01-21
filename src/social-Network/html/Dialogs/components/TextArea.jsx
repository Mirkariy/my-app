import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/Messages/Messages.css';

const TextArea = ({ boyzContainer, onMessageChangeContainer, newMessageText }) => {
  const messageTextContent = React.createRef();

  const boyz = () => {
    boyzContainer();
  };

  const onMessageChange = () => {
    const text = messageTextContent.current.value;
    onMessageChangeContainer(text);
  };
  return (
    <div className="kurwa">
      <textarea onChange={onMessageChange} ref={messageTextContent} value={newMessageText} />
      <button type="button" onClick={boyz}>Send</button>
    </div>
  );
};

TextArea.propTypes = {
  boyzContainer: PropTypes.func.isRequired,
  onMessageChangeContainer: PropTypes.func.isRequired,
  newMessageText: PropTypes.string.isRequired,
};

export default TextArea;
