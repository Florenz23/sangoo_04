import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties
const pratik = require('../../img/contacts/pratik.png');

class Contact {}
Contact.schema = {
  name: 'Contact',
  properties: {
    id : 'int',
    text: 'string',
    note: 'string',
    time: 'string',
    name: 'string',
    surname: 'string',
    surname: 'string',
    img: 'string', // optional property
  }
};
class ContactList {}
ContactList.schema = {
  name: 'ContactList',
  properties: {
    name:    {type: 'string'},
    contacts:    {type: 'list', objectType: 'Contact'},
  }
};

class UserList {}
UserList.schema = {
  name: 'UserList',
  properties: {
    name:    {type: 'string'},
    users:    {type: 'list', objectType: 'User'},
  }
};

class User {}
User.schema = {
  name: 'User',
  primaryKey : 'userId',
  properties: {
    userId:    {type: 'string'},
    userData:    {type: 'list', objectType: 'ConnectData'},
    contacts:    {type: 'list', objectType: 'ConnectUserList'},
  }
};
class ConnectUserList {}
ConnectUserList.schema = {
  name: 'ConnectUserList',
  properties: {
    contactTags:    {type: 'list', objectType: 'ConnectData'},
    userDataShared:    {type: 'list', objectType: 'ConnectData'},
  }
};

class ConnectData {}
ConnectData.schema = {
  name: 'ConnectData',
  properties: {
    tagDescription:    {type: 'string'},
    tagText:    {type: 'string'},
  }
};

// Get the default Realm with support for our objects
let realm = new Realm({schema: [Contact, ContactList, UserList, User, ConnectUserList, ConnectData]});


// Create Realm objects and write to local storage
const createDummy = () => {
  realm.write(() => {
    let kumar = realm.create('Contact', {
      id : 1,
      text: 'Kumar Pratik',
      note: 'Its time to build a difference',
      time: '3:43',
      name: 'Kumar',
      surname: 'Pratik',
      img: 'pratik',
    });
    let sanket = realm.create('Contact', {
      id : 2,
      text: 'Kumar Sanketk',
      note: 'One needs courage to be happy and smiling all time . ',
      time: '3:43',
      name: 'Kumar',
      surname: 'Sanket',
      img: 'sanket',
    });
    let megha = realm.create('Contact', {
      id : 3,
      text: 'Megha Jojo',
      note: 'Live a life style that matchs your visio',
      time: '3:43',
      name: 'Megha',
      surname: 'Jojo',
      img: 'megha',
    });
  });
}
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

const deleteDummies = () => {
  let allContacts = realm.objects('Contact')
  realm.write(() => {

    realm.delete(allContacts)
  })
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
  deleteDummies()
  createDummy()
}
iniRealm()

// Query Realm for all cars with a high mileage
let contactsRealm = realm.objects('Contact')
let usersRealm = realm.objects('User')
console.log(usersRealm[0].userData)
console.log(usersRealm[0].userData[0].tagDescription)



const sanket = require('../../img/contacts/sanket.png');
const megha = require('../../img/contacts/megha.png');
const atul = require('../../img/contacts/atul.png');
const saurabh = require('../../img/contacts/saurabh.png');
const varun = require('../../img/contacts/varun.png');

const contacts = [
  {
    id : 1,
    img: pratik,
    text: 'Kumar Pratik',
    note: 'Its time to build a difference . .',
    time: '3:43 pm',
  },
  {
    id : 2,
    img: sanket,
    text: 'Kumar Sanket',
    note: 'One needs courage to be happy and smiling all time . . ',
    time: '1:12 pm',
  },
  {
    id : 3,
    img: megha,
    text: 'Megha',
    note: 'Live a life style that matchs your vision',
    time: '10:03 am',
  },
  {
    id : 4,
    img: atul,
    text: 'Atul Ranjan',
    note: 'Failure is temporary, giving up makes it permanent',
    time: '5:47 am',
  },
  {
    id : 5,
    img: saurabh,
    text: 'Saurabh Sahu',
    note: 'The biggest risk is a missed opportunity !!',
    time: '11:11 pm',
  },
  {
    id : 6,
    img: varun,
    text: 'Varun Sahu',
    note: 'Wish I had a Time machine . .',
    time: '8:54 pm',
  },
];

export default usersRealm
