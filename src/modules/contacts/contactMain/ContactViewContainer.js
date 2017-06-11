import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactView from './ContactView';
import {NavigationActions} from 'react-navigation';
import * as ContactStateActions from './ContactState'


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       setRecentContactId : (contactId ) => dispatch(ContactStateActions.setRecentContactId(contactId))
    })
)(ContactView)
