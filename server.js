const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.static('public'));  // Serve static files like HTML, JS, etc.

app.get('/weather', (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: 'Error fetching weather data' }));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

