
import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { View } from 'react-native'

import styles from '../../styles/imageBox';

import contacts from '../../../../mock/contacts'

const _getContact = (contactId) => {
  const contact = contacts.find(function(obj){return obj.get('id') === contactId})
  return contact
}

const renderData = (contactId) => {
  const datas = contacts
  const contact = _getContact(contactId)
  return (
              <ListItem avatar style={{backgroundColor:'white'}}>
                <Left>
                  <Thumbnail source={require('../../../../../img/contacts/donny.png')} />
                </Left>
                <Body>
                  <Text>{contact.get('name')} {contact.get('surname')}</Text>
                  <Text numberOfLines={1} note>{contact.get('note')}</Text>
                </Body>
                <Right>
                  <Text note>{contact.get('time')}</Text>
                </Right>
              </ListItem>
  )
}

const ConnectDetailImageBox = (props) => {
  const datas = contacts
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ConnectDetailImageBox
