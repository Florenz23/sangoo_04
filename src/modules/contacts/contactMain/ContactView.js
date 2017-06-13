import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { LiestView } from 'realm/react-native'


import styles from '../styles/styles';

import realm from "../db_ini"

import { findInDb, findInDbTagText } from '../../../db/db_helper'


const showContactDetail = (navigate,setRecentContactId,contactId) => {
  navigate({routeName: 'ContactDetail'})
  setRecentContactId(contactId)
}


//TODO user ListView from realm

const ContactView = (props) => {
  const { navigate, setRecentContactId, contactId } = props

  //TODO hier kann der Login statt finden
  const userId = "a3"
  let datas
  datas = realm.objects('User').filtered(`userId = "${userId}"`)
  console.log(datas)
  console.log(datas[0].contacts[0].userDataShared[0].personalData[0].tagDescription)
  datas = datas[0].contacts
  const uri = "./donny-copy.png"

    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar onPress={() => showContactDetail(navigate,setRecentContactId,data.userId)}>
                <Left>
                  <Thumbnail source={{uri: findInDbTagText(data.contactTags,"tagDescription","Image")}} />
                </Left>
                <Body>
                  <Text>
                    {findInDb(data.contactTags,"tagDescription","Vorname").tagText}
                  </Text>
                  <Text numberOfLines={1} note>{data.userDataShared[0].hashTagData[0].tagText}</Text>
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

export default ContactView;
