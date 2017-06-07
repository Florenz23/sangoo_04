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

const renderData = (contactId) => {
  const datas = contacts
  const contact = _getContact(contactId)
  return (
      <View>
      <List
          dataArray={contact.userData[0].socialData} renderRow={data =>
          <ListItem button onPress={() => changeShareStatus()}>
            <CheckBox color="green" checked={true} onPress={() => changeShareStatus()} />
            <Body>
              <Text>{data.tagDescription}</Text>
            </Body>
          </ListItem>
        }
        />
      <List
          dataArray={contact.userData[0].personalData} renderRow={data =>
          <ListItem button onPress={() => changeShareStatus()}>
            <CheckBox color="green" checked={true} onPress={() => changeShareStatus()} />
            <Body>
              <Text>{data.tagDescription}</Text>
            </Body>
          </ListItem>
        }
        />
      <List
          dataArray={contact.userData[0].hashTagData} renderRow={data =>
          <ListItem button onPress={() => changeShareStatus()}>
            <CheckBox color="green" checked={true} onPress={() => changeShareStatus()} />
            <Body>
              <Text>{data.tagDescription}</Text>
            </Body>
          </ListItem>
        }
        />
      </View>
      )
}

const ConnectDetailShareBox = (props) => {
  const datas = contacts
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ConnectDetailShareBox
