import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties

import { UserList, User, ConnectUserList, ConnectData, UserData } from './contacts_db';

// Get the default Realm with support for our objects
let realm = new Realm({schema: [UserList, User, ConnectUserList, ConnectData, UserData]});


const createDummyUser = () => {
  realm.write(() => {
    let donny = realm.create('User', {
      userId : 'a1'
    });
    let donny_userData_personalData_name = realm.create('ConnectData', {
      tagDescription:'Name',
      tagText:'Donald'
    })
    let donny_userData_personalData_phone = realm.create('ConnectData', {
      tagDescription:'Phone',
      tagText:'Donald'
    })
    let donny_userData_hashTagData_color = realm.create('ConnectData', {
      tagDescription:'Lieblingsfarbe',
      tagText:'blau'
    })
    let donny_userData_hashTagData_hobby = realm.create('ConnectData', {
      tagDescription:'Interessen',
      tagText:'Geld, Immobilien'
    })
    let donny_userData_socialData_facebook = realm.create('ConnectData', {
      tagDescription:'Facebook',
      tagText:'https://web.facebook.com/DonaldTrump/?_rdc=1&_rdr'
    })
    let donny_userData_socialData_linkedIn = realm.create('ConnectData', {
      tagDescription:'LinkedIn',
      tagText:'https://www.linkedin.com/in/donald-trump-jr-4454b862/?locale=de_DE'
    })
    let donny_userData_socialData_twitter = realm.create('ConnectData', {
      tagDescription:'Twitter',
      tagText:'https://twitter.com/realdonaldtrump?lang=de'
    })
    let donny_userData = realm.create('UserData', {
    });
    let donny_publicShardData = realm.create('UserData', {
    });
    donny_publicShardData.personalData.push(donny_userData_personalData_name)
    donny_publicShardData.personalData.push(donny_userData_personalData_phone)
    donny_publicShardData.socialData.push(donny_userData_socialData_facebook)
    donny_publicShardData.socialData.push(donny_userData_socialData_linkedIn)
    donny_publicShardData.socialData.push(donny_userData_socialData_twitter)
    donny_publicShardData.hashTagData.push(donny_userData_hashTagData_hobby)
    donny_publicShardData.hashTagData.push(donny_userData_hashTagData_color)
    donny.userData.push(donny_userData)
    donny.publicShardData.push(donny_publicShardData)
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
