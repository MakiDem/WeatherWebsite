const apiKey = 'f62cf2f7d1472e1843c9e4c1cf77b607';

async function getWeather (city) {
  const weatherData = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const weather = await weatherData.json()
  return weather
}


document.querySelector('.enter-button').addEventListener('click', async () => {
  const name = document.querySelector('.name-input').value
  console.log(name)
  const city = document.querySelector('.city-input').value

  if (!city) {
    document.querySelector('.text-panel').innerHTML = 'Please input a city name'
    setTimeout(() => {
      document.querySelector('.text-panel').innerHTML =''
    }, 3000)
    return
  }
  
  const weatherData =  await getWeather(city)
  localStorage.removeItem('weatherData')
  localStorage.removeItem('name')
  localStorage.setItem('name', JSON.stringify(name))
  localStorage.setItem('weatherData', JSON.stringify(weatherData))
  console.log(weatherData)
  window.location.href="city.html"
})