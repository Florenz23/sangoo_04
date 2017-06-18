import React from 'react'
import { TouchableHighlight,TouchableOpacity, View, StyleSheet, Text } from 'react-native'

import PostConnectBox from './PostConnectBox'

import Icon from 'react-native-vector-icons/Ionicons'
import Awesome from 'react-native-vector-icons/FontAwesome';

const joClick = () => {
  console.log("up");
}

const _onPressButton= () => {
    console.log("You tapped the button!");
  }

const PostRatingBox = (props) => {
  const {children,ratePostUp,ratePostDown,connectWithUser} = props
  return (
          <View style={styles.postRatingContainer}>
          <PostConnectBox connectWithUser = {() => connectWithUser() }>
          </PostConnectBox>
          <Text style={styles.postRatingItems}>
            {children.get('rating')}
          </Text>
          <TouchableOpacity onPress={() => ratePostUp()}>
            <Text >
              <Icon style={styles.postRatingItems} name="ios-thumbs-up"  />
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
  postRatingContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  postRatingButton : {
    marginBottom : 20,
  },
  postRatingItems : {
    fontSize : 30,
    color : '#4F8EF7'
  },
  postRatingConnect : {
    fontSize : 50,
    color : '#4F8EF7',
  },
});

export default PostRatingBox
