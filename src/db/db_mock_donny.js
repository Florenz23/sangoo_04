import realm from "./db_ini"
  realm.write(() => {
    let donny = realm.create('User', {
      userId : 'a1'
    });
    let donny_userData_personalData_name = realm.create('ConnectData', {
      tagDescription:'Name',
      tagText:'Trump'
    })
    let donny_userData_personalData_surname = realm.create('ConnectData', {
      tagDescription:'Vorname',
      tagText:'Donald'
    })
    let donny_userData_personalData_phone = realm.create('ConnectData', {
      tagDescription:'Phone',
      tagText:'1111 111 111'
    })
    let donny_userData_hashTagData_color = realm.create('ConnectData', {
      tagDescription:'Lieblingsfarbe',
      tagText:'blau'
    })
    let donny_userData_hashTagData_hobby = realm.create('ConnectData', {
      tagDescription:'Interessen',
      tagText:'Geld, Immobilien'
    })
    let donny_userData_socialData_facebook = realm.create('ConnectData', {
      tagDescription:'Facebook',
      tagText:'https://web.facebook.com/DonaldTrump/?_rdc=1&_rdr'
    })
    let donny_userData_socialData_linkedIn = realm.create('ConnectData', {
      tagDescription:'LinkedIn',
      tagText:'https://www.linkedin.com/in/donald-trump-jr-4454b862/?locale=de_DE'
    })
    let donny_userData_socialData_twitter = realm.create('ConnectData', {
      tagDescription:'Twitter',
      tagText:'https://twitter.com/realdonaldtrump?lang=de'
    })
    let donny_userData = realm.create('UserData', {
    });
    let donny_publicShardData = realm.create('UserData', {
    });
    donny_userData.personalData.push(donny_userData_personalData_surname)
    donny_userData.personalData.push(donny_userData_personalData_name)
    donny_userData.personalData.push(donny_userData_personalData_phone)
    donny_publicShardData.personalData.push(donny_userData_personalData_name)
    donny_publicShardData.personalData.push(donny_userData_personalData_phone)
    donny_publicShardData.socialData.push(donny_userData_socialData_facebook)
    donny_publicShardData.socialData.push(donny_userData_socialData_twitter)
    donny_publicShardData.hashTagData.push(donny_userData_hashTagData_hobby)
    donny_publicShardData.hashTagData.push(donny_userData_hashTagData_color)

    donny_userData.socialData.push(donny_userData_socialData_facebook)
    donny_userData.socialData.push(donny_userData_socialData_linkedIn)
    donny_userData.socialData.push(donny_userData_socialData_twitter)
    donny_userData.hashTagData.push(donny_userData_hashTagData_hobby)
    donny_userData.hashTagData.push(donny_userData_hashTagData_color)
    donny.userData.push(donny_userData)
    donny.publicShardData.push(donny_publicShardData)

  });
export default realm
