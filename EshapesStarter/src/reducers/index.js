import { combineReducers } from 'redux';
import ContactsReducer from './reducer_contacts'
import EshapesReducer from './reducer_eshapes'
import { reducer as formReducer } from 'redux-form';
  // state: (state = {}) => state

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  eshapes: EshapesReducer,
  form: formReducer
});

export default rootReducer;
