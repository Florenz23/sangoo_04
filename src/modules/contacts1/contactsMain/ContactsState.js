import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

import posts from '../../../mock/posts'

// Initial state
const initialState = Map({
  posts: posts,
});

// Actions
const SHOWPOSTDETAIL = 'ThreadState/SHOWPOSTDETAIL'
// Action creators
export function showPostDetail(postId) {
  return {
    type: SHOWPOSTDETAIL,
    payload : {
      postId : postId
    }
  };
}

const SETRECENTCONTACTID = 'ContactsState/SETRECENTCONTACTID'
// Action creators
export function setRecentContactId(postId) {
  console.log("moin")
  return {
    type: SETRECENTCONTACTID,
    payload : {
      postId : postId
    }
  };
}

// Reducer
export default function ContactsStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOWPOSTDETAIL:
      return state.update('recentPostId', value => action.payload.postId);
    case SETRECENTCONTACTID:
      console.log("setDetail")
      return state.update('recentContactId', value => action.payload.contactId);
    default:
      return state;
  }
}
