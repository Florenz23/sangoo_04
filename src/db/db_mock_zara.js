import { ConnectDataClass, UserClass, UserDataClass, ConnectUserListClass } from './class_models'
import { zara } from './base64img'

import donny12 from './db_mock_donny'

const createConnectData = (description, text) => {
  return new ConnectDataClass(description,text)
}
let zara_userData_personalData_name = createConnectData('Name','Trump')
let zara_userData_personalData_surname = createConnectData('Vorname','Ivanka')
let zara_userData_personalData_phone = createConnectData('Handy','2341234 12341234')
let zara_userData_personalData_image = createConnectData('Image',zara)
let zara_userData_hashTagData_color = createConnectData('Lieblingsstyle','Bizz')
let zara_userData_hashTagData_hobby = createConnectData('Interessen','Mode, Beauty')
let zara_userData_socialData_facebook = createConnectData('Facebook','https://web.facebook.com/DonaldTrump/?_rdc=1&_rdr')
let zara_userData_socialData_linkedIn = createConnectData('LinkedIn','https://www.linkedin.com/in/donald-trump-jr-4454b862/?locale=de_DE')
let zara_userData_socialData_twitter = createConnectData('Twitter','https://twitter.com/realdonaldtrump?lang=de')

let zara_publicSharedData_personalData = []
zara_publicSharedData_personalData.push(zara_userData_personalData_name)
zara_publicSharedData_personalData.push(zara_userData_personalData_phone)

let zara_publicSharedData_socialData = []
zara_publicSharedData_socialData.push(zara_userData_socialData_facebook)
zara_publicSharedData_socialData.push(zara_userData_socialData_twitter)

let zara_publicSharedData_hashTagData = []
zara_publicSharedData_hashTagData.push(zara_userData_hashTagData_hobby)
zara_publicSharedData_hashTagData.push(zara_userData_hashTagData_color)

let zara_userData_personalData = []
zara_userData_personalData.push(zara_userData_personalData_surname)
zara_userData_personalData.push(zara_userData_personalData_name)
zara_userData_personalData.push(zara_userData_personalData_phone)
zara_userData_personalData.push(zara_userData_personalData_image)

let zara_userData_socialData = []
zara_userData_socialData.push(zara_userData_socialData_facebook)
zara_userData_socialData.push(zara_userData_socialData_linkedIn)
zara_userData_socialData.push(zara_userData_socialData_twitter)

let zara_userData_hashTagData = []
zara_userData_hashTagData.push(zara_userData_hashTagData_hobby)
zara_userData_hashTagData.push(zara_userData_hashTagData_color)

let zara_userDataClass = new UserDataClass(zara_userData_personalData, zara_userData_socialData, zara_userData_hashTagData)
let zara_publicSharedDataClass = new UserDataClass(zara_publicSharedData_personalData, zara_publicSharedData_socialData, zara_publicSharedData_hashTagData)

let zara_contact_donny_contact_tags = []
zara_contact_donny_contact_tags.push(donny12.userData.personalData[0])
zara_contact_donny_contact_tags.push(donny12.userData.personalData[1])
let zara_contact_donny_contact_userDataShared = []
zara_contact_donny_contact_userDataShared.push(donny12.userData.personalData[2])
zara_contact_donny_contact_userDataShared.push(donny12.userData.socialData[0])
zara_contact_donny_contact_userDataShared.push(donny12.userData.hashTagData[0])
zara_contact_donny_contact_userDataShared.push(donny12.userData.hashTagData[1])

let zara_contact_donny = new ConnectUserListClass(zara_contact_donny_contact_tags,zara_contact_donny_contact_userDataShared)

let zara_contacts = [zara_contact_donny]
let zara_user = new UserClass('a3',zara_userDataClass,zara_publicSharedDataClass,zara_contacts)

export default zara_user
