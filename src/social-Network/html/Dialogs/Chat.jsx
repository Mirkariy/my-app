import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import '../../css/Messages/Messages.css';
import ChatMessages from './Chat__Zaglushka';
import TextAreaContainer from './components/TextAreaContainer';

const Chat = ({ chatMessages }) => (
  <div>
    <Route path="/messages/:id" component={() => <ChatMessages chatMessages={chatMessages} />} />
    <TextAreaContainer className="messageInput" />
  </div>
);

Chat.propTypes = {
  chatMessages: PropTypes.element.isRequired,
};

export default Chat;
