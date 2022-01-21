import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/Messages/Messages.css';

const Message = ({ letter }) => (
  <div>
    {letter}
  </div>
);

Message.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default Message;
