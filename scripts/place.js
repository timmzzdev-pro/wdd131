// Footer
document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;

// Weather values
const temp = 10;
const wind = 5;

// Wind Chill Function (ONE LINE)
function calculateWindChill(t, v){
return 13.12 + 0.6215*t - 11.37*Math.pow(v,0.16) + 0.3965*t*Math.pow(v,0.16);
}

// Condition check
let windChill = "N/A";

if (temp <= 10 && wind > 4.8){
windChill = calculateWindChill(temp, wind).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;