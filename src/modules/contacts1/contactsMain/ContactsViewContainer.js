import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactsView from './ContactsView';
import {NavigationActions} from 'react-navigation';
import * as ContactsStateActions from '../contactsMain/ContactsState';

export default connect(
  (state) => ({
    posts: state.getIn(['threads', 'posts']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      showPostDetail: (threadId) => dispatch(ContactsStateActions.showPostDetail(threadId)),
      setRecentContactId : (contactId ) => dispatch(ContactsStateActions.setRecentContactId(contactId))
    })
)(ContactsView)


// export default connect(
//   (state) => ({
//     recievePost: state.app.initialStatePost
//   }),
//   (dispatch) => ({
//     editPost: (dispatchPost) => dispatch(actions.postActionName(dispatchPost)),
//   })
// )(App)
