
import Realm from 'realm'
import { UserList, User, ConnectUserList, ConnectData, UserData } from './db_models';
let realm = new Realm({schema: [UserList, User, ConnectUserList, ConnectData, UserData]});

export default realm 
