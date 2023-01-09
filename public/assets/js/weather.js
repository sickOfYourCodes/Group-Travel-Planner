const searchBtn = document.querySelector("#searchBtn");

// Takes the name of the input and makes two variables, cityName which is the display and cityNameSearch which is what is put into the search
// Creates an array in localStorage called cities or gets the array cities and pushes in the cityName if it does not exist inside array
// If the units are not selected, we stop the function and alert the user to pick a valid unit

const getCity = async (event, city) => {
  event.stopPropagation()
  let cityName = city || document.querySelector("#cityInput").value;
  let cityNameSearch = cityName.toString().toLowerCase();
  cityNameSearch = cityNameSearch.replace(" ", "_");
  const history = JSON.parse(localStorage.getItem("cities")) || [];
  if (!history.includes(cityName)) {
    history.push(cityName);
  }
  if (
    document.querySelector("#units").value != "imperial" &&
    document.querySelector("#units").value != "metric" &&
    document.querySelector("#units").value != "standard"
  ) {
    window.alert(
      "Please pick a type of unit you would like to see information displayed in."
    );
    return;
  }
  localStorage.setItem("cities", JSON.stringify(history));
  displayHistory();
  console.log(cityNameSearch)
  findCityInfo(cityNameSearch);
}

// Allows us to create a button for each previously searched city
function displayHistory() {
  const history = JSON.parse(localStorage.getItem("cities")) || [];
  document.querySelector("#searchHistory").innerHTML = "";
  for (var i = 0; i < history.length; i++) {
    let cityEl = document.createElement("button");
    cityEl.innerText = history[i];
    cityEl.classList.add(
      "row",
      "col-8",
      "justify-content-center",
      "cityButtons"
    );
    document.querySelector("#searchHistory").appendChild(cityEl);
  }
}

// Gets geo information from the searched city and passes that into the API to get all weather info

const findCityInfo = async (cityNameSearch) => {
  var geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${cityNameSearch}&appid=1560a07c19638ebfb003c32577cdfee1`;
  await fetch(geoAPI)
    .then(function (response) {
      if (response.status != 200) {
        searchBtn.append("<p>Please input a valid city.</p>");
      }
      return response.json();
    })
    .then(function (data) {
      const lat = data[0].lat;
      const lon = data[0].lon;
      const units = document.querySelector("#units").value;
      const curWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1560a07c19638ebfb003c32577cdfee1&units=${units}`;
      fetch(curWeatherAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          document.querySelector("#cityName").textContent = `${data.name}`;
          document.querySelector(
            "#cityPic"
          ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          switch (units) {
            case "metric":
              document.querySelector(
                "#cityTempCur"
              ).textContent = `${data.main.temp} \u00b0C`;
              document.querySelector(
                "#cityWindCur"
              ).textContent = `${data.wind.speed} meters/sec`;
              break;
            case "imperial":
              document.querySelector(
                "#cityTempCur"
              ).textContent = `${data.main.temp} \u00b0F`;
              document.querySelector(
                "#cityWindCur"
              ).textContent = `${data.wind.speed} mph`;
              break;
            case "standard":
              document.querySelector(
                "#cityTempCur"
              ).textContent = `${data.main.temp} K`;
              document.querySelector(
                "#cityWindCur"
              ).textContent = `${data.wind.speed} meters/sec`;
              break;
          }
          document.querySelector(
            "#cityHumCur"
          ).textContent = `${data.main.humidity} %`;
        });
      const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1560a07c19638ebfb003c32577cdfee1&units=${units}`;
      fetch(forecastAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          let curDate = data.list[5].dt_txt;
          curDate = curDate.split(" ");
          curDate = curDate[0];
          curDate = curDate.split("-");
          curDate =
            curDate[1] +
            "/" +
            (parseInt(curDate[2]) - 1).toString() +
            "/" +
            curDate[0];
          document.querySelector("#cityDate").textContent = `${curDate}`;
          var dayNum = 1;
          for (var i = 5; i < 38; i += 8) {
            let dayDate = data.list[i].dt_txt;
            dayDate = dayDate.split(" ");
            dayDate = dayDate[0];
            dayDate = dayDate.split("-");
            dayDate = dayDate[1] + "/" + dayDate[2] + "/" + dayDate[0];
            document.querySelector(`#day${dayNum}`).textContent = `${dayDate}`;
            const dayTemp = data.list[i].main.temp;
            const dayWind = data.list[i].wind.speed;
            const dayIcon = data.list[i].weather[0].icon;
            document.querySelector(
              `#cityPic${dayNum}`
            ).src = `https://openweathermap.org/img/wn/${dayIcon}.png`;
            switch (units) {
              case "metric":
                document.querySelector(
                  `#cityTemp${dayNum}`
                ).textContent = `${dayTemp} \u00b0C`;
                document.querySelector(
                  `#cityWind${dayNum}`
                ).textContent = `${dayWind} meters/sec`;
                break;
              case "imperial":
                document.querySelector(
                  `#cityTemp${dayNum}`
                ).textContent = `${dayTemp} \u00b0F`;
                document.querySelector(
                  `#cityWind${dayNum}`
                ).textContent = `${dayWind} mph`;
                break;
              case "standard":
                document.querySelector(
                  `#cityTemp${dayNum}`
                ).textContent = `${dayTemp} K`;
                document.querySelector(
                  `#cityWind${dayNum}`
                ).textContent = `${dayWind} meters/sec`;
                break;
            }
            const dayHum = data.list[i].main.humidity;
            document.querySelector(
              `#cityHumidity${dayNum}`
            ).textContent = `${dayHum} %`;
            dayNum++;
          }
        });
    });
}

// Gets the name of the city on the button that users press to pass into the getCity(city)

function prevSearch(event) {
  event.stopPropagation();
  const prevCityName = event.target.innerText;
  getCity(prevCityName);
}

displayHistory();

searchBtn.addEventListener("click", getCity);
document.querySelector("#searchHistory").addEventListener("click", prevSearch);
