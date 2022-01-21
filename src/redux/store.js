// disabled !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import messageReducer from './Messages_Reducer';
import profileReducer from './Profile_Reducer';

// disabled dispatch const !!!!!!!!!!!!!!!!!!!!!
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
  state: {
    profilePage: {
      posts: [
        { message: 'Hello, World' },
        { message: 'Its my first try' },
        { message: 'I am like it' },
        { message: 'Твой рот ебал, JS' },
        { message: 'шакал ебаный' },
      ],
      newPostText: '',
    },
    messagesPage: {
      dialogData: [
        { name: 'Misha', id: 'Misha', ava: 'https://mywishboard.com/thumbs/wish/r/p/n/1020x0_rrjutpulmsgxpwsm_jpg_b61e.jpg' },
        { name: 'Dima', id: 'Dima', ava: 'https://images.kashamalasha.com/201601210001-kartinki-prikoly-kote-kashamalasha-com.jpg' },
        { name: 'Kurwa', id: 'Kurwa', ava: 'https://i.pinimg.com/originals/18/59/a5/1859a5e8fbe435f89d58cd917c92cea4.jpg' },
        { name: 'Mirkariy', id: 'Mirkariy', ava: 'https://i.kym-cdn.com/photos/images/original/000/631/077/fbe.gif' },
        { name: 'Mihail Wiktor Lider otryda H.U.I.L.', id: 'Mihail_Wiktor_Lider_otryda_H.U.I.L.', ava: 'https://i.imgflip.com/48qqgy.png' },
        { name: 'Jora', id: 'Jora', ava: 'https://i.pinimg.com/originals/8a/4f/63/8a4f63d2f318d75773cf4c512ee5b560.jpg' },
      ],
      chatMessages: [
        { message: 'Ae, kurwa' },
        { message: 'Ta fuck' },
        { message: 'Whats up?' },
      ],
      newMessageText: '',
    },
    sidebar: [],
  },
  getState() {
    return this.state;
  },

  rerenderEntiereTree() {
  },

  // disabled for the dispatch, and for reducer !!!!!!!!!!!!!!!
  // addPost() {
  //   const newPost = {
  //     message: this.state.newPostText,
  //   };
  //   store.state.posts.push(newPost);
  //   store.state.newPostText = '';
  //   this.rerenderEntiereTree(this.state);
  // },
  // changeTextArea(newText) {
  //   this.state.newPostText = newText;
  //   this.rerenderEntiereTree(this.state);
  // },

  // sendMessage() {
  //   const newMessage = {
  //     message: this.state.newMessageText,
  //   };
  //   this.state.chatMessages.push(newMessage);
  //   this.state.newMessageText = '';
  //   this.rerenderEntiereTree();
  // },

  // changeMessageText(--------) {
  //   this.state.newMessageText = action.kurwa;
  //   this.rerenderEntiereTree();
  // },

  subscribe(observer) {
    this.rerenderEntiereTree = observer;
  },

  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.messagesPage = messageReducer(this.state.messagesPage, action);
    this.rerenderEntiereTree(this.state);
    // disabled dispatch path !!!!!!!!!!!!!!!!!
    // if (action.type === ADD_POST) {
    //   const newPost = {
    //     message: this.state.profilePage.newPostText,
    //   };
    //   this.state.profilePage.posts.push(newPost);
    //   this.state.profilePage.newPostText = '';
    //   this.rerenderEntiereTree(this.state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this.state.profilePage.newPostText = action.newText;
    //   this.rerenderEntiereTree(this.state);
    // } else if (action.type === SEND_MESSAGE) {
    //   const newMessage = {
    //     message: this.state.messagesPage.newMessageText,
    //   };
    //   this.state.messagesPage.chatMessages.push(newMessage);
    //   this.state.messagesPage.newMessageText = '';
    //   this.rerenderEntiereTree(this.state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   this.state.messagesPage.newMessageText = action.kurwa;
    //   this.rerenderEntiereTree(this.state);
    // }
  },

};

// disabled dispatch's action creator !!!!!!!!!!!!!!!!!!
// export const boyzActionCreator = () => ({ type: SEND_MESSAGE });
// export const onMessageChangeActionCreator = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   kurwa: text,
// });
// export const kurwaActionCreator = () => ({ type: ADD_POST });
// export const
// onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default store;
window.store = store;
