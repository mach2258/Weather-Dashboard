var searchHistory = []
var apiKey = 'b7198858af18bbe4976a8b4eb24d2f1d'
var rootUrl = 'https://api.openweathermap.org';

var searchForm = document.querySelector('#searchform')
var searchBar = document.querySelector('#searchBar')
var historyList = document.querySelector('#historyList')
var today = document.querySelector('#city')
var forcast5day = document.querySelector('#forcast')
var submitBtn = document.querySelector('#submitBtn')

var cityName = document.querySelector('#cityName')
var tempature = document.querySelector('#tempature')
var wind = document.querySelector('#wind')
var humidity = document.querySelector('#humidity')
var UV = document.querySelector('#UV')

function getWeatherData(lat, lon, city) {
    fetch(`${rootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`).then((response) => {
        return response.json()
    }).then((response) => {
        console.log(response);
        cityName.textContent = "city " + city
        tempature.textContent = "tempature " + response.daily[0].temp.day
        wind.textContent = "wind mph " + response.daily[0].wind_speed
        humidity.textContent ="humidity " + response.daily[0].humidity
        UV.textContent = "UV index " + response.daily[0].uvi
    })
}

// TODO: Function to get long + lat of a city enter
function getLatLong() {
    let city = searchBar.value
    console.log(city)
    fetch(`${rootUrl}/geo/1.0/direct?q=${city}&appid=${apiKey}`).then((response) => {
        return response.json()
    }).then((response) => {
        console.log(response);
        getWeatherData(response[0].lat, response[0].lon, city)
    })
}

submitBtn.addEventListener('click', getLatLong)

