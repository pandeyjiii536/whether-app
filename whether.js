const button = document.getElementById("searchbutton");
const input = document.getElementById("city");
const cityDisplayName = document.getElementById("name");
const citytime = document.getElementById("citytime");
const citytemp = document.getElementById("temp");
const errorMessage = document.getElementById("error"); 
async function getData(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7f9ba4752e894e6b95052501241110&q=${city}&aqi=yes`);
  if (response.ok) {
    return await response.json();
  } else {
    console.log('Error: Failed to fetch data');
    return null;
  }
}

button.addEventListener("click", async function() {
  const value = input.value.trim(); 
  if (value) { 
    const result = await getData(value);
    if (result) {
      cityDisplayName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
      citytime.innerText = `Local Time: ${result.location.localtime}`;
      citytemp.innerText = `Temperature: ${result.current.temp_c}°C`;
      errorMessage.innerText = ""; 
    } else {
      errorMessage.innerText = "Error: Unable to retrieve weather data. Please check the city name.";
    }
  } else {
    errorMessage.innerText = "Error: Please enter a city name.";
  }
});
