const fetch = require('node-fetch');

const getStarWars = async (number) => {
	let data = await fetch(`https://swapi.dev/api/people/${number}/`);
	return await data.json();
}

const sortData = async (number) => {
	let data = await getStarWars(number);
	let response = {
		name: data.name,
		height: data.height,
		DOB: data.birth_year
	}
	return response;
}

const rickAndMortyData = async (number) => {
    const URL = `https://rickandmortyapi.com/api/character/${number}`
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
    sortData,
    rickAndMortyData,
    nasaData
}