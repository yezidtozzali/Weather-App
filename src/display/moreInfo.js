import sunriseIcon from "../assets/weather/sunrise.svg";
import sunsetIcon from "../assets/weather/sunset.svg";
import humidityIcon from "../assets/weather/humidity.svg";
import temperatureIcon from "../assets/weather/temperature.svg"
import windIcon from "../assets/weather/wind.svg";
import arrowIcon from "../assets/weather/arrow.svg";
import pressureIcon from "../assets/weather/pressure.svg";
import uvIcon from "../assets/weather/uv.svg";
import visibilityIcon from "../assets/weather/visibility.svg"
import convert from "../convert";
import state from "../state";


const moreInfo = (weatherData) => {

    const {convertToCelsius, convertToFahrenheit, convertToKmh, convertToMb, convertToMph, convertToInHg} = convert();

    const existingMoreInfo = document.querySelector(".more-info");
if(existingMoreInfo) existingMoreInfo.remove();

    const container = document.querySelector(".container");
    const divMoreInfo = document.createElement("div");
    divMoreInfo.classList.add("more-info");
    divMoreInfo.classList.add("fade-in");
    

    const info1 = document.createElement("div");
    info1.classList.add("info-display");

    const subInfo1 = document.createElement("div");
    subInfo1.classList.add("feelslike");
    const feelslikeText = document.createElement("p");
    feelslikeText.textContent = "Feels like";
    feelslikeText.classList.add("feelsliketext");

    const feelslike = document.createElement("p");

    const tempConversion = state.degreeF
    ? Math.round(weatherData.weatherFeelsLike)
    : Math.round(convertToCelsius(weatherData.weatherFeelsLike));

    feelslike.textContent = tempConversion + "°";
    feelslike.classList.add("temperature");
    feelslike.dataset.min = "";
    feelslike.dataset.max = "";
    feelslike.dataset.value = weatherData.weatherFeelsLike;
    feelslike.dataset.unit = "temperature";
    feelslike.classList.add("feelslikeinfo");

    const subInfo2 = document.createElement("div");
    subInfo2.classList.add("subinfo");
    const sunrise = document.createElement("img");
    sunrise.src  = sunriseIcon;
    sunrise.classList.add("info-icon");
    const sunriseInfo = document.createElement("p");
    sunriseInfo.textContent = weatherData.weatherSunrise.slice(0, 5) + " am";
    const sunset = document.createElement("img");
    sunset.src = sunsetIcon;
    sunset.classList.add("info-icon");
    const sunsetInfo = document.createElement("p");
    sunsetInfo.textContent =  weatherData.weatherSunset.slice(0, 5) + " pm";





    const divWind = document.createElement("div");
    divWind.classList.add("div-info");

    const subDivWind1 = document.createElement("div");
    subDivWind1.classList.add("subinfo");
    const windImg = document.createElement("img");
    windImg.src = windIcon;
    windImg.classList.add("info-icon");
    const windText = document.createElement("p");
    windText.textContent = "Wind";

    const subDivWind2 = document.createElement("div");
    subDivWind2.classList.add("subinfo");
    const directionIcon = document.createElement("img");
    directionIcon.src = arrowIcon;
    directionIcon.classList.add("info-icon");
    directionIcon.style.transform = `rotate(${weatherData.weatherWindDir}deg)`;

    const windInfo = document.createElement("p");

    const speedConversion = state.degreeF
    ? Math.round(weatherData.weatherFeelsLike) + " mph"
    : Math.round(convertToCelsius(weatherData.weatherFeelsLike)) + " km/h";

    windInfo.textContent = speedConversion;
    windInfo.classList.add("temperature");
    windInfo.dataset.min = "";
    windInfo.dataset.max = "";
    windInfo.dataset.value = weatherData.weatherWind;
    windInfo.dataset.unit = "speed";





    const createInfoBlock = (icon,label,value, rawValue = null, unit = null, rawMin = null, rawMax = null) => {
        const div = document.createElement("div");
        div.classList.add("div-info");

        const sub1 = document.createElement("div");
        sub1.classList.add("subinfo");
        const img = document.createElement("img");
        img.src = icon;
        img.classList.add("info-icon");
        const labelItem = document.createElement("p");
        labelItem.textContent = label;

        const sub2 = document.createElement("div");
        sub2.classList.add("subinfo");
        
        const info = document.createElement("p");
        if(rawValue) info.dataset.value = rawValue;
        if(unit) info.dataset.unit = unit;
        if(rawMin) info.dataset.min = rawMin;
        if(rawMax) info.dataset.max = rawMax;

        if(unit === "temperature" && rawMin && rawMax) {
            const newMin = state.degreeF ? rawMin : Math.round(convertToCelsius(rawMin));
            const newMax = state.degreeF ? rawMax : Math.round(convertToCelsius(rawMax));
            info.textContent = newMin + "°/" + newMax + "°";
        } else if(unit === "temperature" && rawValue) {
            info.textContent = (state.degreeF ? Math.round(rawValue) : Math.round(convertToCelsius(rawValue))) + "°";
        } else if(unit === "distance") {
            info.textContent = state.degreeF 
            ? Math.round(rawValue) + " mi" 
            : Math.round(convertToKmh(rawValue)) + " km";
        }  else if(unit === "pressure") {
            info.textContent = state.degreeF 
            ? convertToInHg(rawValue) + " in"
            : rawValue + " mb";
        } else {
            info.textContent = value;
        };

        info.classList.add("temperature");

        sub1.appendChild(img);
        sub1.appendChild(labelItem);
        sub2.appendChild(info);
        div.appendChild(sub1);
        div.appendChild(sub2);

        return div;
    };

    container.appendChild(divMoreInfo);


    divMoreInfo.appendChild(info1);
    info1.appendChild(subInfo1);
    subInfo1.appendChild(feelslikeText);
    subInfo1.appendChild(feelslike);

    info1.appendChild(subInfo2);
    subInfo2.appendChild(sunrise);
    subInfo2.appendChild(sunriseInfo);
    subInfo2.appendChild(sunset);
    subInfo2.appendChild(sunsetInfo);

    divMoreInfo.appendChild(createInfoBlock(temperatureIcon, "Min / Max", Math.round(weatherData.weatherMin) + "°/" + Math.round(weatherData.weatherMax) + "°", null, "temperature", Math.round(weatherData.weatherMin), Math.round(weatherData.weatherMax) ));

    divMoreInfo.appendChild(createInfoBlock(humidityIcon, "Humidity", Math.round(weatherData.weatherHumidity) + "%"));


    divMoreInfo.appendChild(divWind);
    divWind.appendChild(subDivWind1);
    subDivWind1.appendChild(windImg);
    subDivWind1.appendChild(windText);
    divWind.appendChild(subDivWind2);
    subDivWind2.appendChild(directionIcon);
    subDivWind2.appendChild(windInfo);



    divMoreInfo.appendChild(createInfoBlock(pressureIcon, "Pressure", weatherData.weatherPressure + " mb", weatherData.weatherPressure, "pressure", null, null));



    divMoreInfo.appendChild(createInfoBlock(uvIcon, "UV index", weatherData.weatherUV + " of 11"));


    divMoreInfo.appendChild(createInfoBlock(visibilityIcon, "Visibility", Math.round(weatherData.weatherVisibility) + " mi", weatherData.weatherVisibility, "distance", null, null));


}


export default moreInfo;