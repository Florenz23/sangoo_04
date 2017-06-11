import React, { Component } from 'react';
import { CheckBox, List, Header, Title, Content, Button, Icon, IconNB, Card, CardItem, Text, Left, Right, Body, ListItem } from 'native-base';
import { View } from 'react-native'

import styles from '../../styles/socialBox';

import contacts from '../../../../mock/contacts'

import realm from '../../db_ini'

const _getContact = (contactId) => {

  const contacts = realm.objects('User')
  const searchResult = contacts.filtered(`userId = "${contactId}"`)
  const recent_contact = searchResult[0]
  return recent_contact

}

const _getMatchingData = (arr1,arr2) => {
  arr1.prototype.diff = function(arr2) {
      var ret = [];
      for(var i in this) {
          if(arr2.indexOf( this[i] ) > -1){
              ret.push( this[i] );
          }
      }
      return ret;
  };
}

const changeShareStatus = () => {
  console.log("change")
}

const renderCheckBox = (tagDescription,i,checked) => {
  console.log(tagDescription)
    return (
            <ListItem key={i} button onPress={() => changeShareStatus()}>
              <CheckBox color="green" checked={checked} onPress={() => changeShareStatus()} />
              <Body>
                <Text>{tagDescription}</Text>
              </Body>
            </ListItem>
    )
}

const findValue = (dbDataArray,tagDescription) => {
  const findResult = dbDataArray.filtered(`tagDescription = "${tagDescription}"`)[0]
  if (findResult) {
    return true
  }
  return false
}


const prepareData = (userData, sharedData ) => {
  const socialData = userData
  var data = []
  for (var i in socialData) {
    var checked = false
    if (findValue(sharedData, userData[i].tagDescription)){
      checked = true
    }
    data.push(renderCheckBox(userData[i].tagDescription,i,checked))
  }
  return data
}
const renderPersonalData = (contact) => {

  const userData = contact.userData[0].personalData
  const sharedData = contact.publicSharedData[0].personalData
  return (prepareData(userData,sharedData))

}

const renderSocialData = (contact) => {

  const userData = contact.userData[0].socialData
  const sharedData = contact.publicSharedData[0].socialData
  return (prepareData(userData,sharedData))

}

const renderHashTagData = (contact) => {

  const userData = contact.userData[0].hashTagData
  const sharedData = contact.publicSharedData[0].hashTagData
  return (prepareData(userData,sharedData))

}

const renderData = (contactId) => {
  const contact = _getContact(contactId)
  return (
      <View>
        <List>
          {renderPersonalData(contact)}
        </List>
        <List>
          {renderSocialData(contact)}
        </List>
        <List>
          {renderHashTagData(contact)}
        </List>
      </View>
      )
}

const ContactDetailShareBox = (props) => {
  const datas = contacts
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ContactDetailShareBox
