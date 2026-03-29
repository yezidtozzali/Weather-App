import weatherToday from "./display/weatherToday";
import moreInfo from "./display/moreInfo";

const weatherApi = () => {

    const locationInput = document.getElementById("location-input");
    const buttonSearch = document.querySelector(".button-search");

    const locationData = async () => {
        const location = locationInput.value;
        const weatherData = await getWeather(location);
        weatherToday(weatherData);
        moreInfo(weatherData);
        };

    

     locationInput.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            locationData();
        }
    });

    const formatWeather = (weather) => {
        const weatherLocation = weather.resolvedAddress.split(",").join("<br>");
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


        return{weatherCondition, weatherLocation, weatherTemperature, weatherIcon, weatherTime, weatherHumidity, weatherFeelsLike, weatherWind, weatherWindDir, weatherUV, weatherPressure, weatherSunrise, weatherSunset, weatherMax, weatherMin, weatherVisibility};
        };

    async function getWeather (location) {
        try{

        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=DNY5M3KXCEEUDW7C3WNVFKLL7");
        
        

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