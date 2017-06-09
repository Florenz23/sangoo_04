export class UserClass {
  constructor(userId, userData, publicSharedData, contacts){
    this.userId = userId,
    this.userData = userData,
    this.publicSharedData = publicSharedData,
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
    this.personalData = personalData,
    this.socialData = socialData,
    this.hashTagData = hashTagData
  }
}
