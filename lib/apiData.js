const fetch = require('node-fetch');

const rickAndMortyData = async () => {
    const URL = `https://rickandmortyapi.com/api/character/1`
    let data = await fetch(URL);

    let JSObject = await data.json();
    return JSObject;
}

const nasaData = async () => {
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASAAPI}`
    let data = await fetch(URL)

    let JSObject = await data.json();
    return JSObject;
}



module.exports = {
    rickAndMortyData,
    nasaData
}