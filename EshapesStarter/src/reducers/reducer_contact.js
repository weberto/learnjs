import { FETCH_CONTACT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CONTACT:
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
