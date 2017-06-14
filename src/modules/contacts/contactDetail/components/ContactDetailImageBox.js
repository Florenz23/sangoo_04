
import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { View } from 'react-native'

import styles from '../../styles/imageBox';

import realm from '../../db_ini'

import { findInDb, findInDbTagText } from '../../../../db/db_helper'

import fixedUserId from '../../../../mock/logged_in_user_id'

const _getContact = (contactId) => {
  //TODO Login
  // console.log(contactId)
  const userId = fixedUserId
  const users = realm.objects('User')
  const searchResult = users.filtered(`userId = "${userId}"`)
  const recent_user = searchResult[0]
  const contacts = recent_user.contacts
  console.log(contactId)
  let recent_contact = contacts.filtered(`userId = "${contactId}"`)
  return searchResult[0].contacts[0]
}

const renderSurename = (contact) => {
  const searchResult = contact.userDataShared[0].personalData.filtered(`tagDescription = "Vorname"`)[0]
    if (searchResult) {
      return searchResult.tagText
    }
}
const renderName = (contact) => {
  const searchResult = contact.userDataShared[0].personalData.filtered(`tagDescription = "Name"`)[0]
    if (searchResult) {
      return searchResult.tagText
    }
}
//TODO hier das ...64 Bild aus der Datenbank auslesen, also kein require mehr
const renderData = (contactId) => {
  const contact = _getContact(contactId)
  return (
              <ListItem avatar style={{backgroundColor:'white'}}>
                <Left>
                  <Thumbnail source={{uri: findInDbTagText(contact.userDataShared[0].personalData,"tagDescription","Image")}} />
                </Left>
                <Body>
                  <Text>{renderSurename(contact)} {renderName(contact)}</Text>
                </Body>
              </ListItem>
  )
}

const ContactDetailImageBox = (props) => {
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ContactDetailImageBox
