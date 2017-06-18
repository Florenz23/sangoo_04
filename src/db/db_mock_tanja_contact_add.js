import { UserDataClass, ConnectUserListClass, ConnectDataClass } from './class_models'


const createUser = () => {
    const name = new ConnectDataClass("Name","Seiffert")
    const surname = new ConnectDataClass("Vorname","Tanja")
    const phone = new ConnectDataClass("Phone","234235234")
    const facebook = new ConnectDataClass("Facebook","facebook.com/tanja")
    const hobby = new ConnectDataClass("Hobby","Büro")

    const personalData = [name,surname,phone]
    const socialData = [facebook]
    const hashTagData = [hobby]

    const contactTags = [name,surname]

    const userData = new UserDataClass(personalData,socialData,hashTagData)

    const connectUserList = new ConnectUserListClass("a6",contactTags,[userData])

    return connectUserList
}


const user = createUser()
export default user
