import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';


// Initial state
const initialState = Map({
  recentContactId : 1,
});

// Actions
const SETRECENTCONTACTID = 'ConnectState/SETRECENTCONTACTID'
// Action creators
export function setRecentContactId(contactId) {
  return {
    type: SETRECENTCONTACTID,
    payload : {
      contactId : contactId
    }
  };
}

// Reducer
export default function ConnectStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETRECENTCONTACTID:
      return state.update('recentContactId', value => action.payload.contactId);
    default:
      return state;
  }
}
