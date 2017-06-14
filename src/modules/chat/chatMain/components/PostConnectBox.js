import React from 'react'
import { TouchableHighlight,TouchableOpacity, View, StyleSheet, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Awesome from 'react-native-vector-icons/FontAwesome';

const joClick = () => {
  console.log("up");
}

const _onPressButton= () => {
    console.log("You tapped the button!");
  }

const PostConnectBox = (props) => {
  const {children,connectWithUser} = props
  return (
          <View style={styles.postRatingContainer}>
          <TouchableOpacity onPress={() => connectWithUser()}>
            <Text >
              <Awesome style={styles.postRatingButtons} name="plus-circle"  />
            </Text>
          </TouchableOpacity>
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
    fontSize: 25,
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
    color : '#4F8EF7'
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

export default PostConnectBox
