document.addEventListener("DOMContentLoaded", function (event) {
    getWeather("Moscow");
});

function getWeather(city) {

    let cityVal = document.querySelector(".city");
    let tempVal = document.querySelector(".temp-value");
    let humidity = document.querySelector(".humidity");
    let pressure = document.querySelector(".pressure");
    let cloudiness = document.querySelector(".cloudiness");
    let wind = document.querySelector(".wind");

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d7cf4889cf9226d63e3fdc0dd50013fd&units=metric')
        .then(response => response.json())
        .then(weather => {
            cityVal.innerText = weather.name;
            tempVal.innerText = Math.round(weather.main.temp) + " °";
            humidity.innerText = Math.round(weather.main.humidity) + " %";
            pressure.innerText = Math.round((weather.main.pressure) / 1.333);
            cloudiness.innerText = Math.round(weather.clouds.all) + " %";
            wind.innerText = Math.round(weather.wind.speed);
        })
        .catch(err => console.log(err));
}
