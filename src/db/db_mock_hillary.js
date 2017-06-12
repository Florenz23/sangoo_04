import { ConnectDataClass, UserClass, UserDataClass } from './class_models'
import { ivanka } from './base64img'


const createConnectData = (description, text) => {
  return new ConnectDataClass(description,text)
}
let hillary_userData_personalData_name = createConnectData('Name','Trump')
let hillary_userData_personalData_surname = createConnectData('Vorname','Ivanka')
let hillary_userData_personalData_phone = createConnectData('Handy','2341234 12341234')
let hillary_userData_personalData_image = createConnectData('Image',ivanka)
let hillary_userData_hashTagData_color = createConnectData('Lieblingsstyle','Bizz')
let hillary_userData_hashTagData_hobby = createConnectData('Interessen','Mode, Beauty')
let hillary_userData_socialData_facebook = createConnectData('Facebook','https://web.facebook.com/DonaldTrump/?_rdc=1&_rdr')
let hillary_userData_socialData_linkedIn = createConnectData('LinkedIn','https://www.linkedin.com/in/donald-trump-jr-4454b862/?locale=de_DE')
let hillary_userData_socialData_twitter = createConnectData('Twitter','https://twitter.com/realdonaldtrump?lang=de')


let hillary_publicSharedData_personalData = []
hillary_publicSharedData_personalData.push(hillary_userData_personalData_name)
hillary_publicSharedData_personalData.push(hillary_userData_personalData_phone)

let hillary_publicSharedData_socialData = []
hillary_publicSharedData_socialData.push(hillary_userData_socialData_facebook)
hillary_publicSharedData_socialData.push(hillary_userData_socialData_twitter)

let hillary_publicSharedData_hashTagData = []
hillary_publicSharedData_hashTagData.push(hillary_userData_hashTagData_hobby)
hillary_publicSharedData_hashTagData.push(hillary_userData_hashTagData_color)

let hillary_userData_personalData = []
hillary_userData_personalData.push(hillary_userData_personalData_surname)
hillary_userData_personalData.push(hillary_userData_personalData_name)
hillary_userData_personalData.push(hillary_userData_personalData_phone)
hillary_userData_personalData.push(hillary_userData_personalData_image)

let hillary_userData_socialData = []
hillary_userData_socialData.push(hillary_userData_socialData_facebook)
hillary_userData_socialData.push(hillary_userData_socialData_linkedIn)
hillary_userData_socialData.push(hillary_userData_socialData_twitter)

let hillary_userData_hashTagData = []
hillary_userData_hashTagData.push(hillary_userData_hashTagData_hobby)
hillary_userData_hashTagData.push(hillary_userData_hashTagData_color)

let hillary_userDataClass = new UserDataClass(hillary_userData_personalData, hillary_userData_socialData, hillary_userData_hashTagData)
let hillary_publicSharedDataClass = new UserDataClass(hillary_publicSharedData_personalData, hillary_publicSharedData_socialData, hillary_publicSharedData_hashTagData)

let hillary12 = new UserClass('a1',hillary_userDataClass,hillary_publicSharedDataClass,[])

export default hillary12
