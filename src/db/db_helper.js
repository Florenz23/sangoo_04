const findInDb = ( data,tag,query ) => {
    return data.filtered(`${tag} = "${query}"`)[0]
}

const findInDbTagText = ( data,tag,query ) => {
    const result = findInDb(data,tag,query)
    if (result) {
      return result.tagText
    }
    else {
      return ""
    }
}

export { findInDb, findInDbTagText }
