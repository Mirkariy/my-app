import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/content/Content.css';

const TitleImg = ({ titleImg }) => (
  <div className="img__for__content">
    <img className="main__img" src={`${titleImg}`} alt="" />
  </div>
);

TitleImg.propTypes = {
  titleImg: PropTypes.string.isRequired,
};

export default TitleImg;
