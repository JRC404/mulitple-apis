const fetch = require('node-fetch')

const getWeather = async(city) => { 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APPID}`;   
    let data = await fetch(url) 
    let jsonData = await data.json() 
    return jsonData;
};

module.exports = getWeather;