import React from 'react'

import realm from './dbConnector'
import tanja from './db_mock_tanja'


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
}


export default addTanja
