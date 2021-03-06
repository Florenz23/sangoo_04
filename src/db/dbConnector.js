import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties

import { UserList, User, ConnectUserList, ConnectData, UserData } from './db_models';

import { newTanjaContact } from './db_mock_tanja_contact_add'

// Get the default Realm with support for our objects
let realm = new Realm({schema: [UserList, User, ConnectUserList, ConnectData, UserData]});

import {donny12, hillary, zara, tanja, lena, vanessa, diana, philipp, tina, thomas, hans} from './db_mock_ini'

const insertUserInDb = (user,id) => {
  const contactArray = []
  let contactUserData
  let ConnectUserList
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
    })
    for (var i in user.contacts) {
      contactUserData = realm.create('UserData' , {
        personalData : user.contacts[i].userDataShared.personalData,
        socialData : user.contacts[i].userDataShared.socialData,
        hashTagData : user.contacts[i].userDataShared.hashTagData
      })
      connectUserList = realm.create('ConnectUserList' , {
        contactTags : user.contacts[i].contactTags,
        userId : user.contacts[i].userId,
      })
      connectUserList.userDataShared.push(connectUserList)
      newUser.contacts.push(connectUserList)
    }
    newUser.userData.push(userData)
    newUser.publicSharedData.push(sharedData)
  })
}



const createDummyUser = () => {
  insertUserInDb(lena,'a4')
  insertUserInDb(hans,'a10')
  insertUserInDb(vanessa,'a5')
  insertUserInDb(philipp,'a7')
  insertUserInDb(diana,'a6')
  insertUserInDb(zara,'a3')
  insertUserInDb(tina,'a8')
  insertUserInDb(thomas,'a9')
  insertUserInDb(donny12,'a1')
  insertUserInDb(tanja,'a2')
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
    // addTanja()
  }
}
iniRealm()

// Query Realm for all cars with a high mileage
export default realm
