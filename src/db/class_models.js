export class UserClass {
  constructor(userId, userData, publicSharedData, contacts){
    this.userId = userId,
    //array
    this.userData = userData,
    //array
    this.publicSharedData = publicSharedData,
    //array
    this.contacts = contacts
  }
}
export class ConnectDataClass {
  constructor (tagDescription, tagText) {
    this.tagDescription = tagDescription,
    this.tagText = tagText
  }
}
export class UserDataClass {
  constructor(personalData, socialData, hashTagData) {
    //array
    this.personalData = personalData,
    //aray
    this.socialData = socialData,
    //array
    this.hashTagData = hashTagData
  }
}

export class ConnectUserListClass {
  constructor(userId, contactTags, userDataClass) {
    this.userId = userId,
    //array
    this.contactTags = contactTags,
    //array
    this.userDataShared = userDataClass
  }
}
