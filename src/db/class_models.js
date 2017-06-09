export class UserClass {
  constructor(userId, userData, publicShardData, contacts){
    this.userId = userId,
    this.userData = userData,
    this.publicSharedData = publicShardData,
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
