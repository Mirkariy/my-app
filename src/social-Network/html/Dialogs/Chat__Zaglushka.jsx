/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Messages/Messages.css';
import Message from './components/Message';

const ChatMessages = ({ chatMessages }) => {
  const zog_zog = chatMessages.map((message) => (
    <Message letter={message.message} />
  ));

  return (
    <div className="MessagesList">
      { zog_zog }
    </div>
  );
};

ChatMessages.propTypes = {
  chatMessages: PropTypes.string.isRequired,
};

export default ChatMessages;
