let data = JSON.parse(localStorage.getItem('weatherData'))
let userName = JSON.parse(localStorage.getItem('name'))
console.log(data)
console.log(name)

function renderWeatherData(data, userName='User') {
  document.querySelector('.page').innerHTML = `
  <div class="city-container">
      <img src="assets/img/th.jpg" alt="">
      <div class="citytext">
        <div class="cityname">${data.name} City</div>
        <div class="coords">
          <div><span>Latitude:</span> ${data.coord.lat}°</div>
          <div><span>Longitude:</span> ${data.coord.lon}°</div>
        </div>
        
      </div>
    </div>
  
    <main>
      <div class="text-panel">Hello ${userName}, this is your weather report at ${data.name} city at ${(new Date (data.dt)).toLocaleTimeString()}.</div><div>
      <div class="weather-report">
       <div class="title">Weather Report</div>
       <div><span>Timezone:</span>${data.timezone/ 3600} hours from UTC</div>
       <div><span>Time:</span>${(new Date (data.dt)).toLocaleTimeString()}</div>
       <div><span>Country:</span>${data.sys.country}</div>
       <div><span>Average Temperature:</span> ${data.main.temp}°C</div>
       <div><span>Max Temperature:</span> ${data.main.temp_max}°C</div>
       <div><span>Min Temperature:</span>${data.main.temp_min}°C</div>
       <div><span>Pressure(Sea Level):</span>${data.main.sea_level}hPA</div>
       <div><span>Pressure(Ground Level):</span>${data.main.grnd_level}hPA</div>
       <div><span>Humidity:</span>${data.main.humidity}%</div>
       <div><span>Cloudiness:</span>${data.clouds.all}%</div>
       <div><span>Visibility:</span>${data.visibility}meters</div>
       <div><span>Wind(Speed):</span>${data.wind.speed}m/s</div>
       <div><span>Wind(Direction):</span>${data.wind.deg}°</div>
       <div><span>Sunrise:</span>${new Date((data.sys.sunrise) * 1000).toLocaleTimeString()}</div>
       <div><span>Sunset:</span>${new Date ((data.sys.sunset) * 1000).toLocaleTimeString()}</div>
       
       <div><span>Rain:</span>${data.weather[0].description}</div>
      </div>
    </main>`
}

renderWeatherData(data, userName)