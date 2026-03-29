import sunriseIcon from "../assets/weather/sunrise.svg";
import sunsetIcon from "../assets/weather/sunset.svg";
import humidityIcon from "../assets/weather/humidity.svg";
import temperatureIcon from "../assets/weather/temperature.svg"
import windIcon from "../assets/weather/wind.svg";
import arrowIcon from "../assets/weather/arrow.svg";
import pressureIcon from "../assets/weather/pressure.svg";
import uvIcon from "../assets/weather/uv.svg";
import visibilityIcon from "../assets/weather/visibility.svg"

const moreInfo = (weatherData) => {

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
    feelslike.textContent = Math.round(weatherData.weatherFeelsLike) + "°";
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
    windInfo.textContent = Math.round(weatherData.weatherWind) + " mph";




    const createInfoBlock = (icon,label,value) => {
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
        info.textContent = value;

        sub1.appendChild(img);
        sub1.appendChild(labelItem);
        sub2.appendChild(info);
        div.appendChild(sub1);
        div.appendChild(sub2);

        return div;
    }

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

    divMoreInfo.appendChild(createInfoBlock(temperatureIcon, "Min / Max", Math.round(weatherData.weatherMin) + "°/" + Math.round(weatherData.weatherMax) + "°"));
    divMoreInfo.appendChild(createInfoBlock(humidityIcon, "Humidity", Math.round(weatherData.weatherHumidity) + "%"));


    divMoreInfo.appendChild(divWind);
    divWind.appendChild(subDivWind1);
    subDivWind1.appendChild(windImg);
    subDivWind1.appendChild(windText);
    divWind.appendChild(subDivWind2);
    subDivWind2.appendChild(directionIcon);
    subDivWind2.appendChild(windInfo);



    divMoreInfo.appendChild(createInfoBlock(pressureIcon, "Pressure", weatherData.weatherPressure + " mb"));
    divMoreInfo.appendChild(createInfoBlock(uvIcon, "UV index", weatherData.weatherUV + " of 11"));
    divMoreInfo.appendChild(createInfoBlock(visibilityIcon, "Visibility", weatherData.weatherVisibility + " mi"));


}


export default moreInfo;