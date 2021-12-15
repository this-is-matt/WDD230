let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=41.222794&lon=-111.973266&exclude=minutely,hourly&units=imperial&appid=1ad4bbe7e1f20d81e8438c99fb698385"

fetch(apiURL)
.then((response) =>response.json())
.then((jsonObject) =>{
    console.table(jsonObject);
})
