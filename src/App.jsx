import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Content from './social-Network/html/content/Content';
import Dialogs from './social-Network/html/Dialogs/Dialogs';
import Header from './social-Network/html/header/Header';
import Nav from './social-Network/html/nav/Nav';

const App = ({ profilePage, messagesPage }) => {
  const content = () => (
    <Content profilePage={profilePage} />
  );
  const dialogs = () => (
    <Dialogs messagesPage={messagesPage} />
  );
  return (
    <div className="app__wrapper">
      <Header />
      <Nav />
      <div className="app__wrapper-content">
        <Route path="/profile" component={content} />
        <Route path="/messages" component={dialogs} />
      </div>
    </div>
  );
};
App.propTypes = {
  profilePage: PropTypes.element.isRequired,
  messagesPage: PropTypes.element.isRequired,
};

export default App;
