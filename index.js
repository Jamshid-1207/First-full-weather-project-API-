const inputCity = document.getElementById("input__city");
const btnCity = document.getElementById("get_city");

const cityCard = document.getElementById("city");
const republicCard = document.getElementById("republic");
const gradusCard = document.getElementById("gradus__text");
const subtitleCard = document.getElementById("card__subtitle");
const iconCard = document.getElementById("card__icon");

const API_KEY = "64f595a7575dbbd9de292a922a968128";

function updateUI(data) {
  cityCard.textContent = data.name;
  republicCard.textContent = data.sys.country;

  gradusCard.textContent = Math.round(data.main.temp);
  subtitleCard.textContent = data.weather[0].description;

  const icons = data.weather[0].icon;

  switch (icons) {
    case "01d":
      iconCard.src = "../3d weather icons/sun/26.png";
      break;
    case "01n":
      iconCard.src = "../3d weather icons/moon/10.png";
      break;
    case "02d":
      iconCard.src = "../3d weather icons/sun/6.png";
      break;
    case "02n":
      iconCard.src = "../3d weather icons/moon/9.png";
      break;
    case "03d":
      iconCard.src = "../3d weather icons/sun/27.png";
      break;
    case "03n":
      iconCard.src = "../3d weather icons/moon/15.png";
      break;
    case "04d":
      iconCard.src = "../3d weather icons/sun/4.png";
      break;
    case "04n":
      iconCard.src = "../3d weather icons/moon/15.png";
      break;
    case "09d":
      iconCard.src = "../3d weather icons/sun/8.png";
      break;
    case "09n":
      iconCard.src = "../3d weather icons/moon/2.1.png";
      break;
    case "10d":
      iconCard.src = "../3d weather icons/sun/13.png";
      break;
    case "10n":
      iconCard.src = "../3d weather icons/moon/1.png";
      break;
    case "11d":
      iconCard.src = "../3d weather icons/sun/16.png";
      break;
    case "11n":
      iconCard.src = "../3d weather icons/rain/39.png";
      break;
      iconCard.src = "../3d weather icons/cloud/18.png";
      break;
    default:
      break;
  }
}
function getWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== 200) return;
      updateUI(data);
    })
    .catch((err) =>
      console.log("Ошибка при получении погоды по координатам:", err)
    );
}

btnCity.addEventListener("click", () => {
  const cityName = inputCity.value.trim();
  if (!cityName) {
    alert("Введите название города!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ru`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("Город не найден");
        return;
      }
      updateUI(data);
      inputCity.value = "";
    })
    .catch((err) => {
      console.log("Ошибка:", err);
    });
});

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        getWeatherByCoords(lat, lon);
      },
      (err) => {
        console.log("Геолокация отключена:", err);
      }
    );
  } else {
    alert("Ваш браузер не поддерживает геолокацию");
  }
});
