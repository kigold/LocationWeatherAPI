import getWeather from "./weather"
console.log("Starting ...")
const locations = ["London,uk", "Lagos,nigeria"]
const postalCodes = ["101233", "101222"]
for(let i = 0; i < locations.length; i++){
    getWeather(locations[i], "").then((result) => {
        displayWeather(result)
    })
}



const displayWeather =  (weatherResponse) => {
    console.log(weatherResponse)
    
}