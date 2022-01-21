import React from 'react';
import { boyzActionCreator, onMessageChangeActionCreator } from '../../../../redux/Messages_Reducer';
import TextArea from './TextArea';
import storeContext from '../../../../storeContext';

const TextAreaContainer = () => (
  <storeContext.Consumer>
    {
      (store) => {
        const { newMessageText } = store.getState().messagesPage;

        const boyz = () => {
          store.dispatch(boyzActionCreator());
        };

        const onMessageChange = (text) => {
          const action = onMessageChangeActionCreator(text);
          store.dispatch(action);
        };
        return (
          <TextArea
            newMessageText={newMessageText}
            boyzContainer={boyz}
            onMessageChangeContainer={onMessageChange}
          />
        );
      }
  }
  </storeContext.Consumer>
);

export default TextAreaContainer;
