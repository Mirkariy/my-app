import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../css/Messages/Messages.css';

const DialogItem = ({ id, name, ava }) => (
  <div className="Chat-Owner">
    <img className="Chat-Owner__Avatar" src={`${ava}`} alt="" />
    <NavLink to={`/messages/${id}`}>
      {' '}
      {name}
      {' '}
    </NavLink>
  </div>
);

DialogItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ava: PropTypes.string.isRequired,
};

export default DialogItem;
