require('dotenv').config();  // Load environment variables

let valueSearch = document.getElementById("Value");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let Clouds = document.getElementById("clouds");
let Humidity = document.getElementById("humidity");
let Pressure = document.getElementById("pressure");
let Description = document.querySelector(".description");
let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (valueSearch.value != "") {
        searchWeather();
    }
});

let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + process.env.API_KEY;  // Use the API key from .env


const searchWeather = () => {
    fetch(`/weather?city=${valueSearch.value}`)
        .then(response => response.json())
        .then(data => {
            // Process the data like in your original function
            fetch(url + '&q=' + valueSearch.value)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.cod == 200) {
                    city.querySelector('figcaption').innerHTML = data.name;
                    city.querySelector('img').src = 'https://flagsapi.com/' + data.sys.country + '/shiny/64.png';
    
                    temperature.querySelector('img').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
                    temperature.querySelector('figcaption span').innerHTML = data.main.temp;
                    Description.innerHTML = data.weather[0].description;
                    Humidity.innerText = data.main.humidity;
                    Clouds.innerText = data.clouds.all;
                    Pressure.innerText = data.main.pressure;
                } else {
                    let main = document.querySelector('main');  // Define main to avoid errors
                    main.classList.add('error');
                    setTimeout(() => {
                        main.classList.remove('error');
                    }, 1000);
                }
                valueSearch.value = '';
            })
        })
        .catch(error => console.error(error));
}

// Uncomment for initial test (optional)
// const initApp = () => {
//     valueSearch.value = 'Lucknow';
//     searchWeather();
// }
// initApp();
