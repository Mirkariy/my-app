import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Messages/Messages.css';
import ChatList from './ChatList';
import Chat from './Chat';

const Dialogs = ({ messagesPage }) => (
  <div className="wrap">
    <div className="title">Dialogs</div>
    <div className="Messages">
      <ChatList dialogData={messagesPage.dialogData} />
      <Chat chatMessages={messagesPage.chatMessages} />
    </div>
  </div>
);

Dialogs.propTypes = {
  messagesPage: PropTypes.element.isRequired,
};

export default Dialogs;
