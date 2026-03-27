
const weatherApi = () => {

    const locationInput = document.getElementById("location-input");
    const buttonSearch = document.querySelector(".button-search");

    const locationData = () => {
        const location = locationInput.value;
        getWeather(location);
        };

    buttonSearch.addEventListener("click", () => {
        locationData();
    });

    locationInput.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            locationData();
        }
    });

    const formatWeather = (weather) => {
        const weatherLocation = weather.resolvedAddress;
        const weatherCondition = weather.currentConditions.conditions;
        const weatherTemperature = weather.currentConditions.temp;


        return{weatherCondition,weatherLocation,weatherTemperature};
        };

    async function getWeather (location) {
        try{

        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=DNY5M3KXCEEUDW7C3WNVFKLL7");
        
        

        const weather = await response.json();
        const weatherData = formatWeather(weather);
        console.log(weatherData);



        } catch {
            alert("error");
        }

        

    };



  

    
};

    

export default weatherApi;