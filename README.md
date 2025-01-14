# Weather App ☀️

A simple and responsive weather application built with vanilla HTML, CSS, and JavaScript that provides real-time weather information using the OpenWeather API.

## Features 🌟

- Real-time weather data display
- Search functionality for cities worldwide
- Temperature in Celsius/Fahrenheit
- Visual weather conditions
- Additional weather details:
  - Humidity
  - Wind speed
  - Atmospheric pressure
  - Min/Max temperature

## Demo 🎯

[Add your live demo link here]

![Weather App Screenshot](/path-to-your-screenshot.png)

## Technologies Used 💻

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API
- Font Awesome Icons
- Google Fonts

## API Key Setup 🔑

1. Sign up at [OpenWeather](https://openweathermap.org/)
2. Get your API key from the dashboard
3. Create a `.env` file in the root directory
4. Add your API key:
```
WEATHER_API_KEY=your_api_key_here
```

## Installation & Setup 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
```

2. Navigate to the project directory:
```bash
cd weather-app
```

3. Open `index.html` in your browser to view the app.

## Usage 📱

1. Enter a city name in the search box
2. Press Enter or click the search button
3. View the current weather information:
   - Temperature
   - Weather condition
   - Humidity
   - Wind speed
   - Pressure

## Project Structure 📁

```
weather-app/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── weather-icons/
└── README.md
```

## Code Examples 💡

### API Call Example
```javascript
const getWeatherData = async (city) => {
    const API_KEY = 'your_api_key_here';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements 🚀

- [ ] 5-day weather forecast
- [ ] Geolocation support
- [ ] Weather alerts
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Weather maps integration

## Troubleshooting 🔧

**API Key Issues**
- Ensure your API key is valid
- Check if you've reached the API call limit
- Verify the API endpoint URL

**Display Issues**
- Clear browser cache
- Check console for JavaScript errors
- Verify CSS compatibility with your browser

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments 🙏

- OpenWeather API for weather data
- Font Awesome for icons
- Google Fonts for typography
- [Add any other resources used]

