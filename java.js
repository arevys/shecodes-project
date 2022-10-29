let now = new Date();
let h4 = document.querySelector("h4");

let currentHour = now.getHours();
let currentMinutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let currentDay = days[now.getDay()];

h4.innerHTML = `${currentDay}, ${currentHour} : ${currentMinutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");

  console.log(searchInput.value);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", search);

//

let nameCity = document.querySelector("#enter-city");
let information = document.querySelector("#info");
let city = document.querySelector("#city-info");
let temperatureElement = document.querySelector("#temperature");

let apiKey = "719ab7f10a1b4868223ebfe87a732c8a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

function showTemperature(response) {
  console.log(response.data);
}

let nameValue = `response.data.main.name`;
let temperatureValue = `response.data.main.temp`;

city.innerHTML = nameValue;
temperatureElement.innerHTML = temperatureValue;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function retrievePosition(position) {
  let apiKey = "719ab7f10a1b4868223ebfe87a732c8a";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function showWeather(response) {
  console.log(response.data);
  let temperatureCelsius = Math.round(response.data.main.temp);
  let p = document.querySelector("#temperature");
  p.innerHTML = `${temperatureCelsius}`;
}

let currentButton = document.querySelector("button");
currentButton.addEventListener("click", showWeather);

navigator.geolocation.getCurrentPosition(retrievePosition);
