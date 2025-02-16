function updateTime() {
  let poznanElement = document.querySelector("#poznan");
  if (poznanElement) {
    let poznanDateElement = poznanElement.querySelector(".date");
    let poznanTimeElement = poznanElement.querySelector(".time");
    let poznanTime = moment().tz("Europe/Warsaw");
    poznanDateElement.innerHTML = poznanTime.format("MMMM Do YYYY");
    poznanTimeElement.innerHTML = poznanTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let arucasElement = document.querySelector("#arucas");
  if (arucasElement) {
    let arucasDateElement = arucasElement.querySelector(".date");
    let arucasTimeElement = arucasElement.querySelector(".time");
    let arucasTime = moment().tz("Europe/London");
    arucasDateElement.innerHTML = arucasTime.format("MMMM Do YYYY");
    arucasTimeElement.innerHTML = arucasTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
let cityInterval;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  function updateSelectedCityTime() {
    let cityTime = moment().tz(cityTimeZone);
    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss[<small>]A[</small>]")}</div>
  </div>
  <a href="/"> All cities </a>
  `;
  }

  clearInterval(cityInterval);
  updateSelectedCityTime();
  cityInterval = setInterval(updateSelectedCityTime, 1000);
}
updateTime();
setInterval(updateTime, updateCity, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
