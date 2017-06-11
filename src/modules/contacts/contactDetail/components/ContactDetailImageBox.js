
import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { View } from 'react-native'

import styles from '../../styles/imageBox';

import realm from '../../db_ini'

const _getContact = (contactId) => {

  const contacts = realm.objects('User')
  const searchResult = contacts.filtered(`userId = "${contactId}"`)
  const recent_contact = searchResult[0]
  return recent_contact

}

const renderSurename = (contact) => {
  const searchResult = contact.userData[0].personalData.filtered(`tagDescription = "Vorname"`)[0]
    if (searchResult) {
      return searchResult.tagText
    }
}
const renderName = (contact) => {
  const searchResult = contact.publicSharedData[0].personalData.filtered(`tagDescription = "Name"`)[0]
    if (searchResult) {
      return searchResult.tagText
    }
}
//TODO hier das ...64 Bild aus der Datenbank auslesen, also kein require mehr
const renderData = (contactId) => {
  const contact = _getContact(contactId)
  console.log(contact.userData[0].personalData)
  return (
              <ListItem avatar style={{backgroundColor:'white'}}>
                <Left>
                  <Thumbnail source={require('../../../../../img/contacts/donny.png')} />
                </Left>
                <Body>
                  <Text>{renderSurename(contact)} {renderName(contact)}</Text>
                </Body>
              </ListItem>
  )
}

const ConnectDetailImageBox = (props) => {
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ConnectDetailImageBox
