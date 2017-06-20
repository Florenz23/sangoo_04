import React, {PropTypes, Component} from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


import { PostRatingBox, PostAddButton, ReplyTextBox, PostTextBox } from '../chatMain/components'

import posts from '../../../mock/posts'

const _getPost = (postId) => {
  const post = posts.find(function(obj){return obj.get('id') === postId})
  return post
}

const renderPost = (postId,connectWithUser,ratePostUp,ratePostDown) => {
  const post = _getPost(postId)
  console.log(postId)
    return (
        <View
          style={[styles.container,{backgroundColor:'#e37222'}]}
          key={post.get('id')}
          >
            <PostTextBox key="jo" >
            {post}
            </PostTextBox>
            <PostRatingBox key="nö" style={styles.postRatingContainer}
            ratePostUp={() => ratePostUp()}
            ratePostDown={() => ratePostDown()}
            connectWithUser={() => connectWithUser()}
            >
              {post}
            </PostRatingBox>
        </View>
  )
}

const colors = ['#e37222','#07889b','#66b9bf','#eeaa7b']

const renderReplies = (postId,connectWithUser,ratePostUp,ratePostDown,showPostDetail,navigate) => {
  const post = _getPost(postId)
  const replies = post.get('replies')
  var i = 0
  return replies.map( post => {
    i++
    if (i == 4 ) {
      i = 0
    }
    return (
        <View
          style={[styles.container,{backgroundColor:colors[i]}]}
          key={post.get('id')}
          onPress={() => navigate({routeName: 'ThreadDetailViewContainer'})}
          >
            <ReplyTextBox key="jo">
            {post}
            </ReplyTextBox>
            <PostRatingBox key="nö" style={styles.postRatingContainer}
            ratePostUp={() => ratePostUp()}
            ratePostDown={() => ratePostDown()}
            connectWithUser={() => connectWithUser()}
            >
            {post}
            </PostRatingBox>
        </View>
    )
  })
}

const ThreadDetailView = (props) => {
  const {
      ratePostUp,
      ratePostDown,
      addNewPost,
      showPostDetail,
      navigate,
      postId,
      connectWithUser
    } = props
  console.log(props)
    return (
      <View>
          <ScrollView>
            {renderPost(postId,connectWithUser,ratePostUp,ratePostDown)}
            {renderReplies(postId,connectWithUser,ratePostUp,ratePostDown,showPostDetail,navigate)}
          </ScrollView>
          <PostAddButton
          addNewPost={() => addNewPost()}
          />
      </View>
    )
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

var styles = StyleSheet.create({
  container: {
    padding : 15,
    marginBottom :6,
    flexDirection : 'row'
  },
});

export default ThreadDetailView;
