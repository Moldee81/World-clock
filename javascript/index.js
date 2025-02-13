function updateTime() {
  let poznanElement = document.querySelector("#poznan");
  let poznanDateElement = poznanElement.querySelector(".date");
  poznanDateElement.innerHTML = moment()
    .tz("Europe/Warsaw")
    .format("MMMM Do YYYY");
  let poznanTimeElement = poznanElement.querySelector(".time");
  poznanTimeElement.innerHTML = moment()
    .tz("Europe/Warsaw")
    .format("h:mm:ss [<small>]A[</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss[<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
