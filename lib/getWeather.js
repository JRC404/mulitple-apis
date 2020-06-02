const fetch = require('node-fetch')

const getWeather = async(city) => { 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.APPID}`;   
    let data = await fetch(url) 
    let jsonData = await data.json() 
    return jsonData;
};

const sortData = async (city) => {
	let data = await getWeather(city);
	let response = {
		temp: data.main.temp,
		humidity: data.main.humidity,
		name: data.name
	}
	return response;
}

module.exports = sortData;