let apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=41.222794&lon=-111.973266&exclude=minutely,hourly&units=imperial&appid=1ad4bbe7e1f20d81e8438c99fb698385";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    document.querySelector("#temp").textContent =
      jsonObject.current.temp.toFixed(0);
    document.querySelector("#humidity").textContent =
      jsonObject.current.humidity;
    document.querySelector("#currently").textContent =
      jsonObject.current.weather[0].main;
  });

//three day
fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
 const today = new Date()
    for (let i = 1; i < 4; i++) {
      let theDate = new Date();
      theDate.setDate(today.getDate() + i);
      document.querySelector(`#dayofweek${i}`).textContent =
        weekdays[theDate.getDay()];


      document.querySelector(`#forecast${i}`).textContent =
        `${jsonObject.daily[i].temp.day.toFixed(0)}℉`;
      const imagesrc = `https://openweathermap.org/img/wn/${jsonObject.daily[i].weather[0].icon}.png`;
      const desc = jsonObject.daily[i].weather[0].description;
      document.getElementById(`img${i}`).setAttribute("src", imagesrc);
      document.getElementById(`img${i}`).setAttribute("alt", desc);
    }
  });
