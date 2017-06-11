import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ConnectDetailView from './ConnectDetailView';
import {NavigationActions} from 'react-navigation';
import * as ConnectDetailStateActions from './ConnectDetailState';

export default connect(
  (state) => ({
    recentContactId: state.getIn(['connect', 'recentContactId']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    })
)(ConnectDetailView)
