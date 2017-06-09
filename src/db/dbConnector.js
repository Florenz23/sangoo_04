import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties

import { UserList, User, ConnectUserList, ConnectData, UserData } from './db_models';
import { ConnectDataClass, UserClass, UserDataClass } from './class_models'

// Get the default Realm with support for our objects
let realm = new Realm({schema: [UserList, User, ConnectUserList, ConnectData, UserData]});

const createConnectData = (description, text) => {
  return new ConnectDataClass(description,text)
}
let donny_userData_personalData_name = createConnectData('Name','Trump')
let donny_userData_personalData_surname = createConnectData('Vorname','Donald')
let donny_userData_personalData_phone = createConnectData('Handy','111 1111 111')
let donny_userData_hashTagData_color = createConnectData('Lieblingsfarbe','blau')
let donny_userData_hashTagData_hobby = createConnectData('Hobbies','Geld, Immobilien')
let donny_userData_socialData_facebook = createConnectData('Facebook','https://web.facebook.com/DonaldTrump/?_rdc=1&_rdr')
let donny_userData_socialData_linkedIn = createConnectData('LinkedIn','https://www.linkedin.com/in/donald-trump-jr-4454b862/?locale=de_DE')
let donny_userData_socialData_twitter = createConnectData('Twitter','https://twitter.com/realdonaldtrump?lang=de')


let donny_publicSharedData_personalData = []
donny_publicSharedData_personalData.push(donny_userData_personalData_name)
donny_publicSharedData_personalData.push(donny_userData_personalData_phone)

let donny_publicSharedData_socialData = []
donny_publicSharedData_socialData.push(donny_userData_socialData_facebook)
donny_publicSharedData_socialData.push(donny_userData_socialData_twitter)

let donny_publicSharedData_hashTagData = []
donny_publicSharedData_hashTagData.push(donny_userData_hashTagData_hobby)
donny_publicSharedData_hashTagData.push(donny_userData_hashTagData_color)

let donny_userData_personalData = []
donny_userData_personalData.push(donny_userData_personalData_surname)
donny_userData_personalData.push(donny_userData_personalData_name)
donny_userData_personalData.push(donny_userData_personalData_phone)

let donny_userData_socialData = []
donny_userData_socialData.push(donny_userData_socialData_facebook)
donny_userData_socialData.push(donny_userData_socialData_linkedIn)
donny_userData_socialData.push(donny_userData_socialData_twitter)

let donny_userData_hashTagData = []
donny_userData_hashTagData.push(donny_userData_hashTagData_hobby)
donny_userData_hashTagData.push(donny_userData_hashTagData_color)

let donny_userDataClass = new UserDataClass(donny_userData_personalData, donny_userData_socialData, donny_userData_hashTagData)
let donny_publicSharedDataClass = new UserDataClass(donny_publicSharedData_socialData, donny_publicSharedData_socialData, donny_publicSharedData_hashTagData)

let donny12 = new UserClass('a1',donny_userDataClass,donny_publicSharedDataClass,[])

const insertUserInDb = (user) => {
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
    let donny = realm.create('User', {
        userId: 'a1',
    })
    donny.userData.push(userData)
    donny.publicSharedData.push(sharedData)
  })

}
const createDummyUser = () => {
  insertUserInDb(donny12)
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
