import icons from "./icons";


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
        const min = Math.round(dayData.tempmin);
        const max = Math.round(dayData.tempmax);
        const icon = icons[dayData.icon];


        const div = document.createElement("div");
        div.classList.add("div-hours");

        const p = document.createElement("p");
        p.textContent = day;

        const img = document.createElement("img");
        img.src = icon;
        img.classList.add("img-hours");

        const temperature = document.createElement("p");
        temperature.textContent = min + "°/" + max +"°";

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