"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_1 = require("./weather");
const locations = ["London,uk", "Lagos,nigeria"];
const postalCodes = ["101233", "101222"];
for (let i = 0; i < locations.length; i++) {
    weather_1.default(locations[i], "").then((result) => {
        displayWeather(result);
    });
}
const displayWeather = (weatherResponse) => {
    let response = JSON.parse(weatherResponse);
    if (response.cod == 200) {
        console.log("The weather report for  " + response.name);
        const report = {
            main: response.weather[0].main,
            description: response.weather[0].description,
            temperature: response.main.temp,
            wind: response.wind.speed
        };
        console.log(report);
    }
};
//# sourceMappingURL=index.js.map