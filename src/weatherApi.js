import weatherToday from "./display/weatherToday";
import moreInfo from "./display/moreInfo";
import nextDays from "./display/nextDays";

const weatherApi = () => {
    const divSearch = document.querySelector(".list");
    const locationInput = document.getElementById("location-input");
    const listCity = document.createElement("ul");
    const start = document.querySelector(".start");
    listCity.classList.add("list-city")
    
    let locationInformation = "";


     locationInput.addEventListener("input", () =>{
        listCity.innerHTML = "";
        

        async function getCity() {
        if(!locationInput.value) return;
        
        const response = await fetch(`https://photon.komoot.io/api/?q=${locationInput.value}`);

        const city = await response.json();

        city.features.forEach((features) => {
            if(!features.geometry || !features.geometry.coordinates) return;
            const lat = features.geometry.coordinates[1];
            const lon = features.geometry.coordinates[0];

            const infoCity = document.createElement("li");
            infoCity.classList.add("info-city");
            infoCity.textContent = features.properties.name;
            infoCity.dataset.lat = lat;
            infoCity.dataset.lon = lon;
            const country = document.createElement("span");
            const state = features.properties.state
            if(state){
                country.textContent = "" + features.properties.state +", " + features.properties.country;
            }else{
                country.textContent = features.properties.country
            }
            
            
            listCity.appendChild(infoCity);
            infoCity.appendChild(country);

            infoCity.addEventListener("click", () => {
                locationInformation = features.properties.name + (features.properties.state ? ", " +features.properties.state : "")  + ","  + features.properties.country;
                locationInput.value = features.properties.name;
                listCity.innerHTML = "";
                const coordinates = infoCity.dataset.lat + "," + infoCity.dataset.lon;
                locationData(coordinates);

                start.style.display = "none";
            });
        });

        divSearch.appendChild(listCity);
    }
        getCity();
        
        
});
    

    const locationData = async (location) => {
        if(!location) return;

        const weatherData = await getWeather(location);
        weatherToday(weatherData);
        moreInfo(weatherData);
        nextDays(weatherData);
        
        };



    const formatWeather = (weather) => {
        const weatherLocation = locationInformation.split(",").join("<br>");
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