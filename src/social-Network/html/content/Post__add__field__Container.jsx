import React from 'react';
import { onPostChangeActionCreator, kurwaActionCreator } from '../../../redux/Profile_Reducer';
import PostAddField from './Post__add__field';
import storeContext from '../../../storeContext';

const PostAddFieldContainer = () => (
  <storeContext.Consumer>
    {
      (store) => {
        const state = store.getState();

        const kurwa = () => {
          store.dispatch(kurwaActionCreator());
        };

        const onPostChange = (text) => {
          const action = onPostChangeActionCreator(text);
          store.dispatch(action);
        };
        return (
          <PostAddField
            onPostChangeContainer={onPostChange}
            kurwaContainer={kurwa}
            newPostText={state.profilePage.newPostText}
          />
        );
      }
    }
  </storeContext.Consumer>
);

export default PostAddFieldContainer;
