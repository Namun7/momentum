const API_KEY = "b5db5ab0a0c6c1b64cb8ce9e0373373b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
