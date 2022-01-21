const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        message: state.newMessageText,
      };
      return {
        ...state,
        chatMessages: [...state.chatMessages, newMessage],
        newMessageText: '',
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.kurwa,
      };
    default:
      return state;
  }
};

export const boyzActionCreator = () => ({ type: SEND_MESSAGE });
export const onMessageChangeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  kurwa: text,
});

export default messageReducer;
