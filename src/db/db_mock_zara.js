import { ConnectDataClass, UserClass, UserDataClass, ConnectUserListClass } from './class_models'
import { zara } from './base64img'

import donny12 from './db_mock_donny'
import ivanka from './db_mock_ivanka'

const createConnectData = (description, text) => {
  return new ConnectDataClass(description,text)
}
let userData_personalData_name = createConnectData('Name','Larsson')
let userData_personalData_surname = createConnectData('Vorname','Zara')
let userData_personalData_phone = createConnectData('Handy','2341234 12341234')
let userData_personalData_image = createConnectData('Image',zara)
let userData_hashTagData_color = createConnectData('Lieblingsstyle','Bizz')
let userData_hashTagData_hobby = createConnectData('Interessen','Musik, Party')
let userData_socialData_facebook = createConnectData('Facebook','https://web.facebook.com/DonaldTrump/?_rdc=1&_rdr')
let userData_socialData_linkedIn = createConnectData('LinkedIn','https://www.linkedin.com/in/donald-trump-jr-4454b862/?locale=de_DE')
let userData_socialData_twitter = createConnectData('Twitter','https://twitter.com/realdonaldtrump?lang=de')

let publicSharedData_personalData = []
publicSharedData_personalData.push(userData_personalData_name)
publicSharedData_personalData.push(userData_personalData_phone)

let publicSharedData_socialData = []
publicSharedData_socialData.push(userData_socialData_facebook)
publicSharedData_socialData.push(userData_socialData_twitter)

let publicSharedData_hashTagData = []
publicSharedData_hashTagData.push(userData_hashTagData_hobby)
publicSharedData_hashTagData.push(userData_hashTagData_color)

let userData_personalData = []
userData_personalData.push(userData_personalData_surname)
userData_personalData.push(userData_personalData_name)
userData_personalData.push(userData_personalData_phone)
userData_personalData.push(userData_personalData_image)

let userData_socialData = []
userData_socialData.push(userData_socialData_facebook)
userData_socialData.push(userData_socialData_linkedIn)
userData_socialData.push(userData_socialData_twitter)

let userData_hashTagData = []
userData_hashTagData.push(userData_hashTagData_hobby)
userData_hashTagData.push(userData_hashTagData_color)

let userDataClass = new UserDataClass(userData_personalData, userData_socialData, userData_hashTagData)
let publicSharedDataClass = new UserDataClass(publicSharedData_personalData, publicSharedData_socialData, publicSharedData_hashTagData)


// Contacts

// Donny
let contact_donny_tags = []
contact_donny_tags.push(donny12.userData.personalData[0])
contact_donny_tags.push(donny12.userData.personalData[1])
contact_donny_tags.push(donny12.userData.personalData[3])
let contact_donny_userDataShared_private = []
let contact_donny_userDataShared_social = []
let contact_donny_userDataShared_tag = []
contact_donny_userDataShared_private.push(donny12.userData.personalData[2])
contact_donny_userDataShared_social.push(donny12.userData.socialData[0])
contact_donny_userDataShared_tag.push(donny12.userData.hashTagData[0])
contact_donny_userDataShared_tag.push(donny12.userData.hashTagData[1])

let contact_donny_userDataShared = new UserDataClass(contact_donny_userDataShared_private,contact_donny_userDataShared_social, contact_donny_userDataShared_tag)
let contact_donny = new ConnectUserListClass(contact_donny_tags,contact_donny_userDataShared)

// Ivanka]
let contact_ivanka_tags = []
contact_ivanka_tags.push(ivanka.userData.personalData[0])
contact_ivanka_tags.push(ivanka.userData.personalData[1])
contact_ivanka_tags.push(ivanka.userData.personalData[3])
let contact_ivanka_userDataShared_private = []
let contact_ivanka_userDataShared_social = []
let contact_ivanka_userDataShared_tag = []
contact_ivanka_userDataShared_private.push(ivanka.userData.personalData[2])
contact_ivanka_userDataShared_social.push(ivanka.userData.socialData[0])
contact_ivanka_userDataShared_tag.push(ivanka.userData.hashTagData[0])
contact_ivanka_userDataShared_tag.push(ivanka.userData.hashTagData[1])

let contact_ivanka_userDataShared = new UserDataClass(contact_ivanka_userDataShared_private,contact_ivanka_userDataShared_social, contact_ivanka_userDataShared_tag)
let contact_ivanka = new ConnectUserListClass(contact_ivanka_tags,contact_ivanka_userDataShared)

let contacts = [contact_donny,contact_ivanka]
let zara_user = new UserClass('a3',userDataClass,publicSharedDataClass,contacts)

export default zara_user
