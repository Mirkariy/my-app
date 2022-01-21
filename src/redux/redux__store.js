import { combineReducers, createStore } from 'redux';
import messageReducer from './Messages_Reducer';
import profileReducer from './Profile_Reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
});

const store = createStore(reducers);

export default store;
