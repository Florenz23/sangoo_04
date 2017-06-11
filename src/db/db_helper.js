const findInDb = ( data,tag,query ) => {
    return data.filtered(`${tag} = "${query}"`)[0]
}

export { findInDb }
