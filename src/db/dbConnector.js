import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties

import { UserList, User, ConnectUserList, ConnectData } from './contacts_db';

// Get the default Realm with support for our objects
let realm = new Realm({schema: [UserList, User, ConnectUserList, ConnectData]});


const createDummyUser = () => {
  realm.write(() => {
    let donny = realm.create('User', {
      userId : 'a1'
    });
    let donny_name = realm.create('ConnectData', {
      tagDescription:'Name',
      tagText:'Donald'
    })
    let donny_lf = realm.create('ConnectData', {
      tagDescription:'Lieblingsfarbe',
      tagText:'blau'
    })
    let donny_interessen = realm.create('ConnectData', {
      tagDescription:'Interessen',
      tagText:'Geld, Immobilien'
    })
    donny.userData.push(donny_name)
    donny.userData.push(donny_lf)
    donny.userData.push(donny_interessen)
    donny.publicShardData.push(donny_name)
    donny.publicShardData.push(donny_interessen)
    let peter = realm.create('User', {
      userId : 'a2'
    });
    let peter_name = realm.create('ConnectData', {
      tagDescription:'Name',
      tagText:'Peter'
    })
    let peter_lf = realm.create('ConnectData', {
      tagDescription:'Lieblingsfarbe',
      tagText:'grün'
    })
    let peter_interessen = realm.create('ConnectData', {
      tagDescription:'Interessen',
      tagText:'Malen, Spielen'
    })
    peter.userData.push(peter_name)
    peter.userData.push(peter_lf)
    peter.userData.push(peter_interessen)
    peter.publicShardData.push(peter_name)
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
  deleteUsers()
  if (contactsRealm.length == 0 ){
    createDummyUser()
  }
}
iniRealm()

// Query Realm for all cars with a high mileage

export default realm
