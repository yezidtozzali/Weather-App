import clearDay from "../assets/weather/clear-day.svg";
import clearNight from "../assets/weather/clear-night.svg";
import cloudy from "../assets/weather/cloudy.svg";
import fog from "../assets/weather/fog.svg";
import partlyCloudy from "../assets/weather/partly-cloudy.svg";
import rain from "../assets/weather/rain.svg";
import snow from "../assets/weather/snow.svg";
import thunderstorm from "../assets/weather/thunderstorm.svg";
import wind from "../assets/weather/wind.svg";
import thunderstormRain from "../assets/weather/thunderstorm-rain.svg";
import showersNight from "../assets/weather/showers-night.svg";
import partlyCloudyNight from "../assets/weather/partly-cloudy-night.svg";
import showersDay from "../assets/weather/showers-day.svg";




const weatherToday = (weatherData) => {

    const icons = {
        "clear-day": clearDay,
        "clear-night": clearNight,
        "cloudy": cloudy,
        "fog": fog,
        "partly-cloudy-day": partlyCloudy,
        "partly-cloudy-night": partlyCloudyNight,
        "showers-day": showersDay,
        "showers-night": showersNight,
        "rain": rain,
        "snow": snow,
        "snow-showers-day": snow,
        "snow-showers-night": snow,
        "thunderstorm": thunderstorm,
        "thunder-rain": thunderstormRain,
        "thunder-showers-day": thunderstormRain,
        "thunder-showers-night": thunderstormRain,
        "wind": wind,
    }


    const container = document.querySelector(".container");
    const toadayContainer = document.querySelector(".weather-today");
    toadayContainer.innerHTML = "";

    const weatherNow = document.createElement("div");
    weatherNow.classList.add("weather-now");

    const imgCondition = document.createElement("img");
    imgCondition.src = icons[weatherData.weatherIcon];
    imgCondition.classList.add("icon-today");
    
    const temperatureToday = document.createElement("h1");
    temperatureToday.textContent = Math.round(weatherData.weatherTemperature) + "°";
    temperatureToday.classList.add("temperature-today");

    const divLocationConditions = document.createElement("div");
    divLocationConditions.classList.add("conditions-address");

    const location = document.createElement("p");
    location.classList.add("location");
    location.innerHTML = weatherData.weatherLocation;
    const conditions = document.createElement("p");
    conditions.classList.add("conditions");
    conditions.textContent = weatherData.weatherCondition;

    const divWeatherAllDay = document.createElement("div");
    divWeatherAllDay.classList.add("weather-day");


    const createHourBlock = (label, hour) => {
        const div = document.createElement("div");
        div.classList.add("div-hours");

        const p = document.createElement("p");
        p.textContent = label;

        const img = document.createElement("img");
        img.src = icons[hour.icon];
        img.classList.add("img-hours");

        const temp = document.createElement("p");
        temp.textContent = Math.round(hour.temp) + "°";
        
        div.appendChild(p);
        div.appendChild(img);
        div.appendChild(temp);

        return div;
    };






    container.appendChild(toadayContainer);
    toadayContainer.appendChild(weatherNow);
    toadayContainer.appendChild(divLocationConditions);
    toadayContainer.appendChild(divWeatherAllDay);
    weatherNow.appendChild(imgCondition);
    weatherNow.append(temperatureToday);
    divLocationConditions.appendChild(conditions);
    divLocationConditions.appendChild(location);
    divWeatherAllDay.appendChild(createHourBlock("Morning", weatherData.weatherTime[8]));
    divWeatherAllDay.appendChild(createHourBlock("Afternoon", weatherData.weatherTime[12]));
    divWeatherAllDay.appendChild(createHourBlock("Evening", weatherData.weatherTime[18]));
    divWeatherAllDay.appendChild(createHourBlock("Night", weatherData.weatherTime[22]));




}

export default weatherToday;