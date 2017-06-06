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
    userData:    {type: 'list', objectType: 'ConnectData'},
    publicShardData:    {type: 'list', objectType: 'ConnectData'},
    contacts:    {type: 'list', objectType: 'ConnectUserList'},
  }
};
export class ConnectUserList {}
ConnectUserList.schema = {
  name: 'ConnectUserList',
  properties: {
    contactTags:    {type: 'list', objectType: 'ConnectData'},
    userDataShared:    {type: 'list', objectType: 'ConnectData'},
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
