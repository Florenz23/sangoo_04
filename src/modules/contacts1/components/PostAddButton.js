import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

const PostAddButton = (props) => {
  const {addNewPost} = props
  return (
        <ActionButton  position="center" buttonColor="rgba(245, 50, 64, 0.8)"
            onPress={() => addNewPost()}>
        </ActionButton>
  )
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 25,
    height: 22,
    color: 'white',
  },
});

export default PostAddButton
