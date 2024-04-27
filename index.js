require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

const getWeather = async (lat, lon) => {
    try {

        const API_Key = process.env.OPENWEATHER_API_KEY;
        if (!API_Key) {
            console.error("API Key is undefined. Make sure it's set in environnement variable.");
            return { error: "API Key is undefined" };
        }
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return { error: "Failed to retrieve weather data" };
    }
};

app.get('/', async (req, res) => {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
        return res.status(400).send({ error: "Latitude and longitude are required" });
    }

    try {
        const weatherData = await getWeather(lat, lon, process.env.OPENWEATHER_API_KEY);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
