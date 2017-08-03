import { SET_ESHAPES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_ESHAPES:
      console.log(action.payload.data);
      return action.payload;
      // return action.payload.data;
    default:
      return state;
  }
}
