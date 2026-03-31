import icons from "./icons";
import convert from "../convert";
import state from "../state";

const moreDays = (weatherData) => {
    const {convertToCelsius} = convert();

    const existingNextDays = document.querySelector(".next-days");
if(existingNextDays) existingNextDays.remove();

    const container = document.querySelector(".container");
    const divMoreDays = document.createElement("div");
    divMoreDays.classList.add("next-days");
    divMoreDays.classList.add("fade-in");


    const createWeatherDays = (dayData) => {


        const date = new Date(dayData.datetime);
        const day = date.toLocaleDateString("en-us", { weekday: "short"});
        const icon = icons[dayData.icon];


        const div = document.createElement("div");
        div.classList.add("div-hours");

        const p = document.createElement("p");
        p.textContent = day;

        const img = document.createElement("img");
        img.src = icon;
        img.classList.add("img-hours");

        const temperature = document.createElement("p");
        const tempMinConversion = state.degreeF 
        ? Math.round(dayData.tempmin)
        : Math.round(convertToCelsius(dayData.tempmin));
        const tempMaxConversion = state.degreeF 
        ? Math.round(dayData.tempmax)
        : Math.round(convertToCelsius(dayData.tempmax));
        temperature.dataset.unit = "temperature";
        temperature.dataset.min = dayData.tempmin;
        temperature.dataset.max = dayData.tempmax;
        temperature.classList.add("temperature")
        temperature.textContent = tempMinConversion + "°/" + tempMaxConversion
         +"°";
         temperature.dataset.unit = "temperature";
         

        divMoreDays.appendChild(div);
        div.appendChild(p);
        div.appendChild(img);
        div.appendChild(temperature);

        return div;


    }




    container.appendChild(divMoreDays);
    divMoreDays.appendChild(createWeatherDays(weatherData.weatherDays[1]));
    divMoreDays.appendChild(createWeatherDays(weatherData.weatherDays[2]));
    divMoreDays.appendChild(createWeatherDays(weatherData.weatherDays[3]));
    divMoreDays.appendChild(createWeatherDays(weatherData.weatherDays[4]));
}

export default moreDays;