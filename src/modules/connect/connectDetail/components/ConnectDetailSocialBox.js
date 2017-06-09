
import React, { Component } from 'react';
import { Container,List, Header, Title, Content, Button, Icon, IconNB, Card, CardItem, Text, Left, Right, Body } from 'native-base';
import { View } from 'react-native'

import styles from '../../styles/socialBox';

import realm from '../../db_ini'

const _getContact = (contactId) => {

  const contacts = realm.objects('User')
  const searchResult = contacts.filtered(`userId = "${contactId}"`)
  const recent_contact = searchResult[0]
  return recent_contact

}

const _renderSearch = () => {
  return (
              <Right>
                <Icon name="search" />
              </Right>
  )
}

const _renderFacebook = (contact) => {
  return _renderSocialMedia(contact, "Facebook","logo-facebook", "#3B579D")
}
const _renderGooglePlus = (contact) => {
  return _renderSocialMedia(contact, "GooglePlus","logo-googleplus", "#DD5044")
}
const _renderTwitter = (contact) => {
  return _renderSocialMedia(contact, "Twitter","logo-twitter", "#55ACEE")
}
const _renderLinkedIn = (contact) => {
  return _renderSocialMedia(contact, "LinkedIn","logo-linkedin", "#007BB6")
}
const _renderYouTube = (contact) => {
  return _renderSocialMedia(contact, "YouTube","logo-youtube", "#D62727")
}

const _renderSocialMedia = (contact,tag,logo,color) => {
  const searchResult = contact.publicSharedData[0].socialData.filtered(`tagDescription = "${tag}"`)
  if (searchResult.length == 0 ){
    return
  }
  return (
         <CardItem>
              <Icon active name={logo} style={{ color: `${color}` }} />
              <Text>{tag}</Text>
              {_renderSearch()}
         </CardItem>
  )
}

const renderData = (contactId) => {
  const contact = _getContact(contactId)
  return (
    <List>
          {_renderFacebook(contact)}
          {_renderGooglePlus(contact)}
          {_renderTwitter(contact)}
          {_renderLinkedIn(contact)}
          {_renderYouTube(contact)}
    </List>
      )
}

const ConnectDetailSocialBox = (props) => {
  const {children} = props
    return (
      <View>
        {renderData(children)}
        </View>
    )
}

export default ConnectDetailSocialBox
