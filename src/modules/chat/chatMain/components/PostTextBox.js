import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostTextBox = (props) => {
  const { children } = props
  return (
          <View style={styles.postTextContainer}>
            <Text style={styles.postText }>{children.get('message')}</Text>
            <View style={styles.postReplyContainer}>
              <Text >
                <FontAwesome style={styles.postReplyIcon} name="commenting-o"  />
              </Text>
              <Text style={styles.postReplyNumber}>{children.get('replies').size}</Text>
            </View>
          </View>
  )
}

var styles = StyleSheet.create({
  container: {
    padding : 15,
    marginBottom :6,
    flexDirection : 'row'
  },
  postTextContainer : {
    flex : 4
  },
  postText : {
    fontSize: 20,
    color: 'white',
  },
  postRatingContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  postRatingButtons : {
    fontSize : 50,
    color : '#4F8EF7'
  },
  postRatingValue : {
    fontSize : 30,
    color : "rgb(80,227,194)"
  },
  postReplyContainer : {
    flexDirection : 'column',
  },
  postReplyIcon : {
    fontSize : 10,
  },
  postReplyNumber : {
    fontSize : 10,
  }
});

export default PostTextBox
