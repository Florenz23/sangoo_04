import { ConnectDataClass, UserClass, UserDataClass } from './class_models'
import { donny } from './base64img'

const createConnectData = (description, text) => {
  return new ConnectDataClass(description,text)
}
let donny_userData_personalData_name = createConnectData('Name','Trump')
let donny_userData_personalData_surname = createConnectData('Vorname','Donald')
let donny_userData_personalData_phone = createConnectData('Handy','111 1111 111')
let donny_userData_personalData_image = createConnectData('Image',donny)
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
donny_userData_personalData.push(donny_userData_personalData_image)

let donny_userData_socialData = []
donny_userData_socialData.push(donny_userData_socialData_facebook)
donny_userData_socialData.push(donny_userData_socialData_linkedIn)
donny_userData_socialData.push(donny_userData_socialData_twitter)

let donny_userData_hashTagData = []
donny_userData_hashTagData.push(donny_userData_hashTagData_hobby)
donny_userData_hashTagData.push(donny_userData_hashTagData_color)

let donny_userDataClass = new UserDataClass(donny_userData_personalData, donny_userData_socialData, donny_userData_hashTagData)
let donny_publicSharedDataClass = new UserDataClass(donny_publicSharedData_personalData, donny_publicSharedData_socialData, donny_publicSharedData_hashTagData)

let donny12 = new UserClass('a1',donny_userDataClass,donny_publicSharedDataClass,[])
console.log(donny12)
export default donny12