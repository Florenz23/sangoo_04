import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties

import { UserList, User, ConnectUserList, ConnectData, UserData } from './db_models';

// Get the default Realm with support for our objects
let realm = new Realm({schema: [UserList, User, ConnectUserList, ConnectData, UserData]});

import donny12 from './db_mock_donny'
import hillary from './db_mock_ivanka'
import zara from './db_mock_zara'

const insertUserInDb = (user,id) => {
  realm.write(() => {
    let userData = realm.create('UserData' , {
      personalData : user.userData.personalData,
      socialData : user.userData.socialData,
      hashTagData : user.userData.hashTagData
    })
    let sharedData = realm.create('UserData' , {
      personalData : user.publicSharedData.personalData,
      socialData : user.publicSharedData.socialData,
      hashTagData : user.publicSharedData.hashTagData
    })
    let newUser = realm.create('User', {
        userId: id,
        contacts: user.contacts
    })
    newUser.userData.push(userData)
    newUser.publicSharedData.push(sharedData)
  })

}
const createDummyUser = () => {
  insertUserInDb(donny12,'a1')
  insertUserInDb(hillary,'a2')
  insertUserInDb(zara,'a3')
}

const deleteUsers = () => {
  let allContacts = realm.objects('User')
  realm.write(() => {

    realm.delete(allContacts)
  })
}

const iniRealm = () => {
  let contactsRealm = realm.objects('User')
  deleteUsers()
  if (contactsRealm.length == 0 ){
    createDummyUser()
  }
}
iniRealm()

// Query Realm for all cars with a high mileage

export default realm