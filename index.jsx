import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux__store';
import reportWebVitals from './reportWebVitals';

import App from './App';
import storeContext from './storeContext';

const rerenderEntiereTree = () => {
  const { profilePage } = store.getState();
  const { messagesPage } = store.getState();

  ReactDOM.render(
    <BrowserRouter>
      <storeContext.Provider value={store}>
        <App messagesPage={messagesPage} profilePage={profilePage} />
      </storeContext.Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

rerenderEntiereTree();

store.subscribe(() => {
  rerenderEntiereTree();
});

// rerenderEntiereTree(state, addPost, changeTextArea);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
