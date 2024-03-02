require('dotenv').config();
const axios = require('axios');

const getWeather= async ()=> {
    const{lat, lon, API_Key} = process.env;
    try {
        // Doc : https://openweathermap.org/api/one-call-api
        const reponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`);
        console.log(reponse.data);
    } catch (error){
        console.error(error);
    }
};

getWeather();
