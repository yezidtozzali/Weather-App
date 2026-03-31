import icons from "./icons";
import state from "../state";
import convert from "../convert";


const weatherToday = (weatherData) => {
    const {convertToCelsius} = convert();

    
    const existingWeatherToday = document.querySelector(".next-days");
if(existingWeatherToday) existingWeatherToday.remove();
    

    const container = document.querySelector(".container");
    const toadayContainer = document.createElement("div");
    toadayContainer.innerHTML= "";
    toadayContainer.classList.add("weather-today");
    toadayContainer.classList.add("fade-in");

    const weatherNow = document.createElement("div");
    weatherNow.classList.add("weather-now");

    const imgCondition = document.createElement("img");
    imgCondition.src = icons[weatherData.weatherIcon];
    imgCondition.classList.add("icon-today");
    
    const temperatureToday = document.createElement("h1");
    const tempConversionToday = state.degreeF
    ? Math.round(weatherData.weatherTemperature)
    : Math.round(convertToCelsius(weatherData.weatherTemperature));

    temperatureToday.textContent = tempConversionToday + "°";
    temperatureToday.classList.add("temperature-today");
    temperatureToday.classList.add("temperature");
    temperatureToday.dataset.min = "";
    temperatureToday.dataset.max = "";
    temperatureToday.dataset.value = weatherData.weatherTemperature;
    temperatureToday.dataset.unit = "temperature";
    


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

        const tempConversion = state.degreeF
        ? temp.textContent = Math.round(hour.temp)
        : Math.round(convertToCelsius(hour.temp));

        temp.textContent = tempConversion + "°";
        temp.classList.add("temperature");
        temp.dataset.unit = "temperature";
        temp.dataset.min = "";
        temp.dataset.max = "";
        temp.dataset.unit = "temperature";
        temp.dataset.value = hour.temp;
        temp.dataset.unit = "temperature";
        
        
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