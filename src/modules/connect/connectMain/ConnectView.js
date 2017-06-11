import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { LiestView } from 'realm/react-native'


import styles from '../styles/styles';

import realm from "../db_ini"

import { findInDb } from '../../../db/db_helper'

const showContactDetail = (navigate,setRecentContactId,contactId) => {
  navigate({routeName: 'ConnectDetail'})
  setRecentContactId(contactId)
}


//TODO user ListView from realm

const ConnectView = (props) => {
  const { navigate, setRecentContactId, contactId } = props

  let datas = realm.objects('User')
  console.log(datas.length)
  console.log(datas[0].userData[0].personalData[0].tagDescription)

    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar onPress={() => showContactDetail(navigate,setRecentContactId,data.userId)}>
                <Left>
                  <Thumbnail source={require('../../../../img/contacts/donny.png')} />
                </Left>
                <Body>
                  <Text>
                    {findInDb(data.userData[0].personalData,"tagDescription","Vorname").tagText}
                  </Text>
                  <Text numberOfLines={1} note>{data.publicSharedData[0].hashTagData[0].tagText}</Text>
                </Body>
                <Right>
                <Icon ios='md-add' android="md-add" style={{fontSize: 25, color: 'black'}}/>
                </Right>
              </ListItem>
        }
          />
        </Content>
      </Container>
    )
}

export default ConnectView;
