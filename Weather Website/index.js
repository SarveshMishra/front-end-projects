// Fetching data from OpenWeather API
let city_name;
let country;
async function fetchLongLat() {
  let text = document.getElementById("search").value;

  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=1&appid=f5e49ab46bb7d51869375a81445c3208`;

  let data = await (await fetch(url)).json();

  let long = data[0].lon;
  let lat = data[0].lat;
  city_name = data[0].name;
  country = data[0].country;
  showSevenDayForecast(long, lat);
}

async function showSevenDayForecast(long, lat) {
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=f5e49ab46bb7d51869375a81445c3208&units=metric`;
  let data = await (await fetch(url)).json();

  displayData(data.current, data.daily);
  displayForecast(data.daily);
  displayMap(city_name);
}
function displayData(data_obj, data_array) {
  document.querySelector(".container").innerHTML = "";
  const {
    sunrise,
    sunset,
    temp,
    feels_like,
    humidity,
    clouds,
    wind_speed,
    weather,
  } = data_obj;

  // Setting Sunrise and Sunset time to local time.
  let local_sunrise_time = new Date(sunrise * 1000).toLocaleString(
    `en-${country}`,
    {
      timeZoneName: "short",
    }
  );
  let local_sunset_time = new Date(sunset * 1000).toLocaleString(
    `en-${country}`,
    {
      timeZoneName: "short",
    }
  );
  // Setting Display
  let main_div = document.createElement("div");
  main_div.setAttribute("class", "weather_box");

  // Creating city
  let city = document.createElement("p");
  city.innerHTML = `City Name: ${city_name}`;

  // Creating Min Temp
  let min_temp = document.createElement("p");
  min_temp.innerHTML = `Minimum Temperature: ${data_array[0].temp.min} &#8451`;
  // Creating Max Temp
  let max_temp = document.createElement("p");
  max_temp.innerHTML = `Maximum Temperature: ${data_array[0].temp.max} &#8451`;
  // Creating Humidity
  let humid = document.createElement("p");
  humid.innerHTML = `Humidity: ${humidity}%`;
  // Creating Feels Like
  let feels = document.createElement("p");
  feels.innerHTML = `Feels Like: ${feels_like} &#8451`;
  // Creating Wind Speed
  let speed = document.createElement("p");
  speed.innerHTML = `Wind Speed: ${wind_speed} meter/sec`;
  //  Creating Sunrise time
  let sunr = document.createElement("p");
  sunr.innerHTML = `Sunrise: ${local_sunrise_time}`;
  // Creating Sunset Time
  let sunse = document.createElement("p");
  sunse.innerHTML = `Sunset: ${local_sunset_time}`;
  // Creating Weather condition Icon
  let weather_condition = document.createElement("img");
  weather_condition.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  main_div.append(
    city,
    weather_condition,
    min_temp,
    max_temp,
    humid,
    feels,
    speed,
    sunr,
    sunse
  );

  document.querySelector(".container").appendChild(main_div);
}

function displayMap(city) {
  let map_div = document.createElement("div");
  map_div.setAttribute("class", "map_box");

  let iframe = document.createElement("iframe");
  iframe.setAttribute("class", "map");
  iframe.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  iframe.width = "100%";
  iframe.height = "100%";

  map_div.appendChild(iframe);

  document.querySelector(".container").appendChild(map_div);
}

function displayForecast(forecast_array) {
  document.querySelector(".forecast").innerHTML = "";
  let forecast_div = document.createElement("div");

  forecast_div.setAttribute("class", "forecast_div");

  let h3 = document.createElement("h3");
  h3.textContent = "7 Day Forecast";
  h3.style.textAlign = "center";
  forecast_div.appendChild(h3);
  forecast_array.forEach((element) => {
    let time = new Date(element.dt * 1000).toLocaleString("en-US", {
      weekday: "long",
    });
    let daily_div = document.createElement("div");
    daily_div.setAttribute("class", "daily_div");

    // Creating day
    let day = document.createElement("p");
    day.innerHTML = `${time}`;

    // Creating Icon

    let icon = document.createElement("img");
    icon.src = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;

    // Creating Max Temp
    let max_temp = document.createElement("p");
    max_temp.innerHTML = `${element.temp.max}&#8451`;

    // Creating Min Temp

    let min_temp = document.createElement("p");
    min_temp.innerHTML = `${element.temp.min}&#8451`;

    daily_div.append(day, icon, max_temp, min_temp);
    forecast_div.append(daily_div);
  });

  document.querySelector(".forecast").appendChild(forecast_div);
}
