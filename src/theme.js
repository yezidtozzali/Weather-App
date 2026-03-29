import sunIcon from "./light-mode.svg";
import moonIcon from "./dark-mode.svg";


const theme = () => {
    const switchMode = document.querySelector(".theme-toggle");
    switchMode.src = moonIcon;
    const body = document.querySelector("body");

    let isDark = true;

    switchMode.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        isDark = !isDark;

        if(isDark){
            switchMode.src = moonIcon;
            switchMode.style.filter = "none";
        } else {
            switchMode.src= sunIcon;
            switchMode.style.filter = "invert(1)";
        };
        


    });
};


export default theme;