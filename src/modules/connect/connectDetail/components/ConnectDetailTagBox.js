
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

const renderData = (contactId) => {
  const datas = contacts
  const contact = _getContact(contactId)
  return (
      <View>
      <List
          dataArray={contact.userData} renderRow={data =>
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

const ConnectDetailTagBox = (props) => {
  const datas = contacts
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ConnectDetailTagBox
