
const convert = () => {

    const convertToCelsius = (f) => {
       return Math.round((f - 32) * 5 / 9 * 10) / 10;
    }

    const convertToFahrenheit = (c) => {
       return Math.round((c * 9 / 5 +32) * 10) / 10;
    }


    const convertToKmh = (m) => {
        return Math.round(m * 1.60934);
    }

    const convertToMph = (k) => {
        return Math.round(k / 1.60934);
    }

    const convertToInHg = (mb) => {
        return(mb / 33.8639).toFixed(2);
    }

    const convertToMb = (inHg) => {
        return (inHg * 33.8639).toFixed(1);
    }


    return {convertToCelsius, convertToFahrenheit, convertToKmh, convertToMb, convertToMph, convertToInHg};



}

export default convert;