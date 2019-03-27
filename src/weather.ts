import config from "./config"
import * as request from "request-promise-native"

const baseUrl = config["WEATHER_API_BASE_URL"]
const apiSecret = config["WEATHER_API_SECRET"]


let  getWeather = async (location:String, postalCode:String) => 
{   
    const query = "?q="+location+"&APPID="+apiSecret
    try{
        let result = await request.get(baseUrl + query)
        return result
    }
    catch(err){
        return {"cod":"400", "error":err.message}
    }
    
}

export default getWeather
