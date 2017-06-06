
import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { LiestView } from 'realm/react-native'


import styles from '../styles/styles';

const pratik = require('../../../../img/contacts/pratik.png');
const sanket = require('../../../../img/contacts/sanket.png');
const megha = require('../../../../img/contacts/megha.png');
const atul = require('../../../../img/contacts/atul.png');
const saurabh = require('../../../../img/contacts/saurabh.png');
const varun = require('../../../../img/contacts/varun.png');


import datas from "../../../mock/contacts_db"

const showContactDetail = (navigate,setRecentContactId,contactId) => {
  navigate({routeName: 'ConnectDetail'})
  setRecentContactId(contactId)
}

//TODO user ListView from realm

const ConnectView = (props) => {
  const {navigate,setRecentContactId,contactId } = props

    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar onPress={() => showContactDetail(navigate,setRecentContactId,data.id)}>
                <Left>
                  <Thumbnail source={require('../../../../img/contacts/pratik.png')} />
                </Left>
                <Body>
                  <Text>{data.userData[1].tagText}</Text>
                  <Text numberOfLines={1} note>{data.userData[0].tagText}</Text>
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
