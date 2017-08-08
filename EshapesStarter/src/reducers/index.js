import { combineReducers } from 'redux';
import ContactReducer from './reducer_contact'
import EshapesReducer from './reducer_eshapes'
import ContactsReducer from './reducer_contacts'
import { reducer as formReducer } from 'redux-form';
  // state: (state = {}) => state

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  contact: ContactReducer,
  eshapes: EshapesReducer,
  form: formReducer
});

export default rootReducer;
