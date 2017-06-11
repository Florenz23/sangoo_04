import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

// Initial state
const initialState = Map({
  recentPostId : 1,
});

// Actions
const SETRECENTCONTACTID = 'ThreadState/SETRECENTCONTACTID'
// Action creators
export function setRecentContactId() {
  return {type: SETRECENTCONTACTID};
}

// Reducer
export default function ConnectDetailStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETRECENTCONTACTID:
      console.log("detail")
      return state.update('recentContactId', value => action.payload.contactId);
    default:
      return state;
  }
}
