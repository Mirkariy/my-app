import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Messages/Messages.css';
import DialogItem from './components/DialogItem';

const ChatList = ({ dialogData }) => {
  const dialogElements = dialogData
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />);
  return (
    <div className="Chat-List">
      { dialogElements }
    </div>
  );
};

ChatList.propTypes = {
  dialogData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ava: PropTypes.string.isRequired,
  })).isRequired,
};

export default ChatList;
