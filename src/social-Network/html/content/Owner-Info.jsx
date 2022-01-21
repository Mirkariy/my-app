import React from 'react';
import '../../css/content/Content.css';
import PersonalInfo from './Profile/Personal__Info';
import TitleInfo from './Profile/Title__Img';
import PostAddFieldContainer from './Post__add__field__Container';

const OwnerInfo = () => (
  <div className="content">
    <TitleInfo titleImg="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" />
    <PersonalInfo img="https://tlgrm.ru/_/stickers/f2a/96c/f2a96c37-591c-3df8-9cd7-859db5f06466/2.jpg" name="Yoba Kot" info="From SPb" />
    <PostAddFieldContainer />
  </div>
);

export default OwnerInfo;
