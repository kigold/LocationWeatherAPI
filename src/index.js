"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_1 = require("./weather");
console.log("Starting ...");
const locations = ["London,uk", "Lagos,nigeria"];
const postalCodes = ["101233", "101222"];
for (let i = 0; i < locations.length; i++) {
    weather_1.default(locations[i], "").then((result) => {
        displayWeather(result);
    });
}
const displayWeather = (weatherResponse) => {
    console.log(weatherResponse);
};
//# sourceMappingURL=index.js.map