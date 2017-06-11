import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactsDetailView from './ContactsDetailView';
import {NavigationActions} from 'react-navigation';
import * as ThreadDetailStateActions from '../contactsDetail/ContactsDetailState';

export default connect(
  (state) => ({
    postId: state.getIn(['threadDetail', 'recentPostId']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      threadStateActions: () => dispatch(ThreadStateActions()),
      ratePostUp: () => dispatch(ThreadStateActions.ratePostUp()),
      ratePostDown: () => dispatch(ThreadStateActions.ratePostDown()),
    })
)(ThreadDetailView)
