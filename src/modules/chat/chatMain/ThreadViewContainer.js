import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ThreadView from './ThreadView';
import {NavigationActions} from 'react-navigation';
import * as ThreadStateActions from '../chatMain/ThreadState';

export default connect(
  (state) => ({
    posts: state.getIn(['threads', 'posts']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      threadStateActions: () => dispatch(ThreadStateActions()),
      ratePostUp: () => dispatch(ThreadStateActions.ratePostUp()),
      ratePostDown: () => dispatch(ThreadStateActions.ratePostDown()),
      connectWithUser: () => dispatch(ThreadStateActions.connectWithUser()),
      addNewPost: () => dispatch(ThreadStateActions.addNewPost()),
      reset: () => dispatch(ThreadStateActions.reset()),
      showPostDetail: (threadId) => dispatch(ThreadStateActions.showPostDetail(threadId)),
    })
)(ThreadView)


// export default connect(
//   (state) => ({
//     recievePost: state.app.initialStatePost
//   }),
//   (dispatch) => ({
//     editPost: (dispatchPost) => dispatch(actions.postActionName(dispatchPost)),
//   })
// )(App)
