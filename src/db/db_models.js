export class UserList {}
UserList.schema = {
  name: 'UserList',
  properties: {
    name:    {type: 'string'},
    users:    {type: 'list', objectType: 'User'},
  }
};

export class User {}
User.schema = {
  name: 'User',
  primaryKey : 'userId',
  properties: {
    userId:    {type: 'string'},
    userData:    {type: 'list', objectType: 'UserData'},
    publicSharedData:    {type: 'list', objectType: 'UserData'},
    contacts:    {type: 'list', objectType: 'ConnectUserList'},
  }
};
export class ConnectUserList {}
ConnectUserList.schema = {
  name: 'ConnectUserList',
  properties: {
    contactTags:    {type: 'list', objectType: 'ConnectData'},
    userDataShared:    {type: 'list', objectType: 'UserData'},
  }
};

export class ConnectData {}
ConnectData.schema = {
  name: 'ConnectData',
  properties: {
    tagDescription:    {type: 'string'},
    tagText:    {type: 'string'},
  }
};

export class UserData {}
UserData.schema = {
  name: 'UserData',
  properties: {
    personalData:    {type: 'list', objectType: 'ConnectData'},
    socialData:    {type: 'list', objectType: 'ConnectData'},
    hashTagData:    {type: 'list', objectType: 'ConnectData'},
  }
};
