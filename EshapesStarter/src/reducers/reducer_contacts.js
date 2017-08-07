import { FETCH_CONTACTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      console.log(action.payload);
      return action.payload;
      /**
      console.log(action.payload.data);
      return action.payload.data;
      */
    default:
      return state;
  }
}
