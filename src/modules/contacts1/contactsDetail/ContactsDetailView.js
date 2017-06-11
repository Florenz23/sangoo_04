import React from "react"
import { View, Text } from "react-native"

import contacts from '../../../mock/contacts'

const _getContact = (contactId) => {
  const contact = contacts.find(function(obj){return obj.get('id') === contactId})
  return contact
}

const ContactsDetailView = (props) => {
  const { recentContactId } = props
  const contact = _getContact(recentContactId)
  console.log(contact)
  return (
    <View>
      <Text> Connect Detail  {recentContactId}</Text>
    </View>
  )
}
export default ContactsDetailView
