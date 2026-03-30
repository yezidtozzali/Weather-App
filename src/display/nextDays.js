import icons from "./icons";
import convert from "../convert";

const moreDays = (weatherData) => {
    

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
        temperature.dataset.unit = "temperature";
        temperature.dataset.min = Math.round(dayData.tempmin);
        temperature.dataset.max = Math.round(dayData.tempmax);
        temperature.classList.add("temperature")
        temperature.textContent = temperature.dataset.min + "°/" + temperature.dataset.max +"°";

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