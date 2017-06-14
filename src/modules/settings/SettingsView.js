
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body, Toast } from 'native-base';

import styles from './styles';

export default class SettingsView extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
  }
  empty() {
    console.log("moin")
    Toast.hide()
    Toast.close()
    this.state = {
      showToast : false
    }
  }

  render() {
    return (
      <Container style={styles.container}>

        <Content padder>
          <Button onPress={()=> Toast.show({
              text: 'Kontaktanfrage gesendet',
              position: 'top',
              duration: 3000,
              type: 'success'
            })}>
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
