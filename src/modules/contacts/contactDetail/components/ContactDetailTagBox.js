
import React, { Component } from 'react';
import { Container,List, Header, Title, Content, Button, Icon, IconNB, Card, CardItem, Text, Left, Right, Body, ListItem } from 'native-base';
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
          dataArray={contact.publicSharedData[0].hashTagData} renderRow={data =>
            <ListItem style={{backgroundColor:'white'}}>
              <Text>{data.tagDescription}</Text>
              <Right>
                <Text>{data.tagText}</Text>
              </Right>
            </ListItem>
        }
        />
      </View>
      )
}

const ContactDetailTagBox = (props) => {
  const datas = contacts
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ContactDetailTagBox
