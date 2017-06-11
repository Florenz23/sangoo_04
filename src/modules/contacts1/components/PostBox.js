import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import { posts } from '../../../mock/posts'

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostBox = (props) => {
  return (
      <ScrollView>
      {posts.map( post =>
        <View style={[styles.container,{backgroundColor:post.bgColor}]} key={post.postId}>
          <View style={styles.postTextContainer}>
            <Text style={styles.postText }> {post.postMessage} </Text>
            <View style={styles.postReplyContainer}>
              <Text >
                <FontAwesome style={styles.postReplyIcon} name="commenting-o"  />
              </Text>
              <Text style={styles.postReplyNumber}> {post.replies} </Text>
            </View>
          </View>
          <View style={styles.postRatingContainer}>
            <Text >
              <Icon style={styles.postRatingButtons} name="ios-arrow-up"  />
            </Text>
            <Text style={styles.postRatingValue}>
              {post.rating}
            </Text>
            <Text>
              <Icon style={styles.postRatingButtons} name="ios-arrow-down"  />
            </Text>
          </View>
        </View>
      )}
      </ScrollView>
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

export default PostBox
