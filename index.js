let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response);
  console.log(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let currentTemperature = Math.round(response.data.main.temp);
  let actualTemperature = document.querySelector("#temperature");
  let description = document.querySelector("#description");

  actualTemperature.innerHTML = `Temp: ${currentTemperature}°C`;
  description.innerHTML = response.data.weather[0].description;
}
function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-input");
  console.log(cityInput);
  let city = `${cityInput.value}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;

  let unit = "metric";
  let apiKey = "083c2a10f4da45636041f7add0925eef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
