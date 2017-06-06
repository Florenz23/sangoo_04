import React from "react"
import { List } from "native-base"
import { ScrollView, Text } from "react-native"

import { ConnectDetailImageBox, ConnectDetailShareBox, ConnectDetailSocialBox, ConnectDetailTagBox } from './components'

const renderImageBox = (recentContactId) => {
  return (
      <ConnectDetailImageBox>
        {recentContactId}
      </ConnectDetailImageBox>
  )
}
const renderSocialBox = (recentContactId) => {
  return (
      <ConnectDetailSocialBox>
        {recentContactId}
      </ConnectDetailSocialBox>
  )
}
const renderTagBox = (recentContactId) => {
  return (
      <ConnectDetailTagBox>
        {recentContactId}
      </ConnectDetailTagBox>
  )
}
const renderShareBox = (recentContactId) => {
  return (
      <ConnectDetailShareBox>
        {recentContactId}
      </ConnectDetailShareBox>
  )
}

const ConnectDetailView = (props) => {
  let { recentContactId } = props
  console.log(recentContactId)
  recentContactId = 1
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      {renderImageBox(recentContactId)}
      <List style={{backgroundColor:'white'}}>
      {renderSocialBox(recentContactId)}
      {renderTagBox(recentContactId)}
      {renderShareBox(recentContactId)}
      </List>
    </ScrollView>
  )
}
export default ConnectDetailView
