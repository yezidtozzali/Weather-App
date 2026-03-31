import sunIcon from "./light-mode.svg";
import moonIcon from "./dark-mode.svg";
import state from "./state";

const theme = () => {
   



    const switchModeBtn = document.querySelector(".theme-toggle-btn");
    const switchMode = document.querySelector(".theme-toggle");
    switchMode.src = moonIcon;
    const body = document.querySelector("body");

    const browserMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(browserMode){
        body.classList.add("dark-mode");
        state.isDark = true;
        switchMode.src = sunIcon;
        switchMode.style.filter = "invert(1)";
    }

    switchModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        state.isDark = !state.isDark;


        if(!state.isDark){
            switchMode.src = moonIcon;
            switchMode.style.filter = "none";
        } else {
            switchMode.src= sunIcon;
            switchMode.style.filter = "invert(1)";
        };
        


    });
};


export default theme;