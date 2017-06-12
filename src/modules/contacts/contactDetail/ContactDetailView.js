import React from "react"
import { List } from "native-base"
import { ScrollView, Text } from "react-native"

import { ContactDetailImageBox, ContactDetailShareBox, ContactDetailSocialBox, ContactDetailTagBox, ContactDetailPersonalDataBox } from './components'

const renderImageBox = (recentContactId) => {
  return (
      <ContactDetailImageBox>
        {recentContactId}
      </ContactDetailImageBox>
  )
}
const renderSocialBox = (recentContactId) => {
  return (
      <ContactDetailSocialBox>
        {recentContactId}
      </ContactDetailSocialBox>
  )
}
const renderTagBox = (recentContactId) => {
  return (
      <ContactDetailTagBox>
        {recentContactId}
      </ContactDetailTagBox>
  )
}
const renderPersonalDataBox = (recentContactId) => {
  return (
      <ContactDetailPersonalDataBox>
        {recentContactId}
      </ContactDetailPersonalDataBox>
  )
}
const renderShareBox = (recentContactId) => {
  return (
      <ContactDetailShareBox>
        {recentContactId}
      </ContactDetailShareBox>
  )
}

const ContactDetailView = (props) => {
  let { recentContactId } = props
  console.log(`contact detail ${recentContactId}`)
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      {renderImageBox(recentContactId)}
      <List style={{backgroundColor:'white'}}>
      {renderSocialBox(recentContactId)}
      {renderPersonalDataBox(recentContactId)}
      {renderTagBox(recentContactId)}
      {renderShareBox(recentContactId)}
      </List>
    </ScrollView>
  )
}
export default ContactDetailView
