import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactDetailView from './ContactDetailView';
import {NavigationActions} from 'react-navigation';
import * as ContactDetailStateActions from './ContactDetailState';

export default connect(
  (state) => ({
    recentContactId: state.getIn(['contact', 'recentContactId']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    })
)(ContactDetailView)
