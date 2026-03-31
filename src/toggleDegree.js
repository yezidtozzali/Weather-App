import convert from "./convert";
import state from "./state";

const toggleDegree = () => {
    const {convertToCelsius, convertToFahrenheit, convertToKmh, convertToMb, convertToMph, convertToInHg} = convert();
    

    const switchDegreeBtn = document.querySelector(".degree-toggle-btn");
    const switchDegree = document.querySelector(".degree-toggle");

    switchDegreeBtn.addEventListener("click", () => {
        state.degreeF = !state.degreeF;


        switchDegree.textContent = state.degreeF ? "°F" : "°C";

        const temperature = document.querySelectorAll(".temperature");
        
        temperature.forEach((temp) => {
        if(temp.dataset.unit === "temperature"){
            if(temp.dataset.min !== "" && temp.dataset.max !== "") {
                const newMin = state.degreeF ? Math.round(parseFloat(temp.dataset.min)) : Math.round(convertToCelsius(parseFloat(temp.dataset.min)));
                const newMax = state.degreeF ? Math.round(parseFloat(temp.dataset.max)) : Math.round(convertToCelsius(parseFloat(temp.dataset.max)));
                temp.textContent = newMin + "°/" + newMax + "°";
            } else {
                const currentValue = parseFloat(temp.textContent);
                temp.textContent = state.degreeF ? Math.round(convertToFahrenheit(currentValue)) + "°" : Math.round(convertToCelsius(currentValue)) + "°";
            }
        } if(temp.dataset.unit === "speed"){
            const speedValue = parseFloat(temp.dataset.value);
            temp.textContent = state.degreeF 
            ? Math.round(speedValue) + " mph"
            :Math.round(convertToKmh(speedValue)) + " km/h";
        } if(temp.dataset.unit === "pressure"){
            const pressureValue = temp.dataset.value;
            temp.textContent = state.degreeF 
            ? convertToInHg(pressureValue) + " in"
            : pressureValue + " mb";
        }if(temp.dataset.unit === "distance"){
            const distanceValue = parseFloat(temp.dataset.value);
            temp.textContent = state.degreeF 
            ? Math.round(distanceValue) + " mi"
            : Math.round(convertToKmh(distanceValue)) + " km";
        }

    });


    });
};

export default toggleDegree;