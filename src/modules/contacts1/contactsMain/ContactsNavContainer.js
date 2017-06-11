import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ContactsViewContainer from "./ContactsViewContainer"

class ContactsNavContainer extends Component {
  static displayName = 'ColorView';

  static navigationOptions = {
    title: 'Contacts',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='contacts' size={24} color={props.tintColor} />
      )
    }),
    // TODO: move this into global config?
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#39babd'
      }
    }
  }

  render() {
    return (
      <ContactsViewContainer />
    );
  }
}

export default ContactsNavContainer;
