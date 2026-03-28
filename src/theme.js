import sunIcon from "./light-mode.svg";
import moonIcon from "./dark-mode.svg";


const theme = () => {
    const switchMode = document.querySelector(".theme-toggle");
    switchMode.src = moonIcon;

    let isDark = true;

    switchMode.addEventListener("click", () => {

        isDark = !isDark;

        if(isDark){
            switchMode.src = moonIcon;
        } else {
            switchMode.src= sunIcon;
        };
        


    });
};


export default theme;