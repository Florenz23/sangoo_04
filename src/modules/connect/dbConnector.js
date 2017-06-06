import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties

import { UserList, User, ConnectUserList, ConnectData } from '../../mock/contacts_db';

// Get the default Realm with support for our objects
let realm = new Realm({schema: [UserList, User, ConnectUserList, ConnectData]});


const createDummyUser = () => {
  realm.write(() => {
    let donny = realm.create('User', {
      userId : 'a1'
    });
    donny.userData.push({
      tagDescription:'Lieblingsfarbe',
      tagText:'blau'
    })
    donny.userData.push({
      tagDescription:'Name',
      tagText:'Donald'
    })
    let peter = realm.create('User', {
      userId : 'a2',
    });
    peter.userData.push({
      tagDescription:'Lieblingsfarbe',
      tagText:'grün'
    })
    peter.userData.push({
      tagDescription:'Name',
      tagText:'Hans'
    })
  });
}

const deleteUsers = () => {
  let allContacts = realm.objects('User')
  realm.write(() => {

    realm.delete(allContacts)
  })
}

const iniRealm = () => {
  let contactsRealm = realm.objects('User')
//  deleteUsers()
  if (contactsRealm.length == 0 ){
    createDummyUser()
  }
}
iniRealm()

// Query Realm for all cars with a high mileage

export default realm
