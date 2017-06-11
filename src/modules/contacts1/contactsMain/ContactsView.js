
import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';

import styles from '../styles/styles';

const pratik = require('../../../../img/contacts/pratik.png');
const sanket = require('../../../../img/contacts/sanket.png');
const megha = require('../../../../img/contacts/megha.png');
const atul = require('../../../../img/contacts/atul.png');
const saurabh = require('../../../../img/contacts/saurabh.png');
const varun = require('../../../../img/contacts/varun.png');



const datas = [
  {
    id : 1,
    img: pratik,
    text: 'Kumar Pratik',
    note: 'Its time to build a difference . .',
    time: '3:43 pm',
  },
  {
    id : 2,
    img: sanket,
    text: 'Kumar Sanket',
    note: 'One needs courage to be happy and smiling all time . . ',
    time: '1:12 pm',
  },
  {
    id : 3,
    img: megha,
    text: 'Megha',
    note: 'Live a life style that matchs your vision',
    time: '10:03 am',
  },
  {
    id : 4,
    img: atul,
    text: 'Atul Ranjan',
    note: 'Failure is temporary, giving up makes it permanent',
    time: '5:47 am',
  },
  {
    id : 5,
    img: saurabh,
    text: 'Saurabh Sahu',
    note: 'The biggest risk is a missed opportunity !!',
    time: '11:11 pm',
  },
  {
    id : 6,
    img: varun,
    text: 'Varun Sahu',
    note: 'Wish I had a Time machine . .',
    time: '8:54 pm',
  },
];

const showContactDetail = (navigate,setRecentContactId,contactId) => {
  //navigate({routeName: 'ConnectDetail'})
  setRecentContactId(contactId)
}

const showMoin = (navigate,setRecentContactId,contactId) => {
  //navigate({routeName: 'ConnectDetail'})
  setRecentContactId(contactId)
}

const showDetail = (navigate,showPostDetail,postId) => {
  //navigate({routeName: 'ThreadDetailViewContainer'})
  showPostDetail(postId)
}


const ContactsView = (props) => {
  const {navigate,showPostDetail,setRecentContactId} = props

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Avatar</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar onPress={() => showContactDetail(navigate,setRecentContactId,"5")}>
                <Left>
                  <Thumbnail source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
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

export default ContactsView;
