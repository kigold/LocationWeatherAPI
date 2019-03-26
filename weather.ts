import config from "./config"
import * as request from "request-promise-native"

const baseUrl = config["WEATHER_API_BASE_URL"]
const apiSecret = config["WEATHER_API_SECRET"]
let queryString = "?q=London,uk&APPID=" + apiSecret


let  getWeather = async (location:String, postalCode:String) => 
{   
    const query = "?q="+location+"&APPID="+apiSecret
    let result = await request.get(baseUrl + query)
    return result
}

export default getWeather