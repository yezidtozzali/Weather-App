import weatherToday from "./display/weatherToday";
import moreInfo from "./display/moreInfo";
import nextDays from "./display/nextDays";

const weatherApi = () => {
    const divSearch = document.querySelector(".list");
    const locationInput = document.querySelector(".location-input");
    const listCity = document.createElement("ul");
    const start = document.querySelector(".start");
    listCity.classList.add("list-city");
    divSearch.appendChild(listCity);
    
    let locationInformation = "";
    let timer; 

async function getCity() {
    if(!locationInput.value) return;
    
    try{        
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput.value}&format=json&limit=5`,
    { headers: { "Accept-Language": "us" } });
    console.log(response);
    
    
    const city = await response.json();
        console.log(city);

    city.forEach((place) => {
        
        if(!place.lat || !place.lon) return;
        const lat = place.lat;
        const lon = place.lon;

        const infoCity = document.createElement("li");
        infoCity.classList.add("info-city");
        infoCity.textContent = place.display_name;
        infoCity.dataset.lat = lat;
        infoCity.dataset.lon = lon;
            
            
        listCity.appendChild(infoCity);
            

        infoCity.addEventListener("click", () => {
            locationInformation = place.display_name;
            locationInput.value = place.display_name;
            listCity.innerHTML = "";
            const coordinates = infoCity.dataset.lat + "," + infoCity.dataset.lon;
            locationData(coordinates);

            start.style.display = "none";
        });
        });
    } catch (err) {
            console.error("Erreur getCity:", err);
        }
}


locationInput.addEventListener("input", () =>{
    listCity.innerHTML = "";
    clearTimeout(timer);
    timer = setTimeout(getCity, 300);

        
        
});
    

    const locationData = async (location) => {
        if(!location) return;

        const weatherData = await getWeather(location);
        weatherToday(weatherData);
        moreInfo(weatherData);
        nextDays(weatherData);
        
        };



    const formatWeather = (weather) => {
        const weatherLocation = locationInformation.split(",").slice(0, 1).join("<br>");
        const weatherCondition = weather.currentConditions.conditions;
        const weatherTemperature = weather.currentConditions.temp;
        const weatherIcon = weather.currentConditions.icon;
        const weatherTime = weather.days[0].hours;
        const weatherHumidity = weather.currentConditions.humidity;
        const weatherFeelsLike = weather.currentConditions.feelslike;
        const weatherWind = weather.currentConditions.windspeed;
        const weatherWindDir = weather.currentConditions.winddir;
        const weatherUV = weather.currentConditions.uvindex;
        const weatherPressure = weather.currentConditions.pressure;
        const weatherSunrise = weather.currentConditions.sunrise;
        const weatherSunset = weather.currentConditions.sunset;
        const weatherMin = weather.days[0].tempmin;
        const weatherMax = weather.days[0].tempmax;
        const weatherVisibility = weather.currentConditions.visibility;
        
        const weatherDays = weather.days;




        return{weatherCondition, weatherLocation, weatherTemperature, weatherIcon, weatherTime, weatherHumidity, weatherFeelsLike, weatherWind, weatherWindDir, weatherUV, weatherPressure, weatherSunrise, weatherSunset, weatherMax, weatherMin, weatherVisibility, weatherDays};
        };

    async function getWeather (location) {
        try{

        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + encodeURIComponent(location) + "?key=DNY5M3KXCEEUDW7C3WNVFKLL7");
        
        

        const weather = await response.json();
        console.log(weather);
        const weatherData = formatWeather(weather);
        
        return weatherData;



        } catch {
            alert("error");
        }

        

    };



  

    
};

    

export default weatherApi;