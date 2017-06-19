import React from 'react'
import { TouchableHighlight,TouchableOpacity, View, StyleSheet, Text} from 'react-native'
import { Toast } from 'native-base'

import Icon from 'react-native-vector-icons/Ionicons'
import Awesome from 'react-native-vector-icons/FontAwesome';

import realm from '../../../../db/dbConnector'
import tanja from '../../../../db/db_mock_tanja'

//TODO this is quick and dirty
const addTanja = () => {
  const zara = realm.objects('User').filtered('userId = "a3"')[0]
  realm.write(() => {
    const tanjaContactUserData = realm.create('UserData' , {
    })
    const tanjaConnectUserList = realm.create('ConnectUserList' , {
      userId : "a4"
    })
    tanjaContactUserData.personalData.push(tanja.userData.personalData[0])
    tanjaContactUserData.personalData.push(tanja.userData.personalData[1])
    tanjaContactUserData.socialData.push(tanja.userData.socialData[0])
    tanjaContactUserData.hashTagData.push(tanja.userData.hashTagData[0])

    tanjaConnectUserList.contactTags.push(tanja.userData.personalData[0])
    tanjaConnectUserList.contactTags.push(tanja.userData.personalData[1])
    tanjaConnectUserList.contactTags.push(tanja.userData.personalData[3])
    tanjaConnectUserList.userDataShared.push(tanjaContactUserData)
    zara.contacts.push(tanjaConnectUserList)
  })
  console.log(zara.contacts.length)
}


const joClick = () => {
  console.log("up");
}

const _onPressButton= () => {
    console.log("You tapped the button!");
}

const _sendConnectRequest = (connectWithUser) => {
  console.log("request")
  connectWithUser()
  Toast.show({
      text: 'Kontaktanfrage gesendet',
      position: 'top',
      duration: 3000,
      type: 'success'
  })
  addTanja()
}

const PostConnectBox = (props) => {
  const {children,connectWithUser} = props
  return (
          <View style={styles.postRatingContainer}>
          <TouchableOpacity onPress={() => _sendConnectRequest(connectWithUser)}>
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
