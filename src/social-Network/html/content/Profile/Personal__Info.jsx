import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/content/Content.css';

const PersonalInfo = ({ img, name, info }) => (
  <div className="account">
    <div className="avatar">
      <img className="avatar__img" src={`${img}`} alt="" />
    </div>
    <div className="person__info">
      <div className="name">
        {name}
      </div>
      <div className="info">
        {info}
      </div>
    </div>
  </div>
);

PersonalInfo.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default PersonalInfo;
