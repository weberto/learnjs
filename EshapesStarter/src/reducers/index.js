import { combineReducers } from 'redux';
import ContactsReducer from './reducer_contacts'
import { reducer as formReducer } from 'redux-form';
  // state: (state = {}) => state

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  form: formReducer
});

export default rootReducer;
