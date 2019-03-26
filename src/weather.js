"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const request = require("request-promise-native");
const baseUrl = config_1.default["WEATHER_API_BASE_URL"];
const apiSecret = config_1.default["WEATHER_API_SECRET"];
let getWeather = (location, postalCode) => __awaiter(this, void 0, void 0, function* () {
    const query = "?q=" + location + "&APPID=" + apiSecret;
    try {
        let result = yield request.get(baseUrl + query);
        return result;
    }
    catch (err) {
        return { "cod": "400", "error": err.message };
    }
});
exports.default = getWeather;
//# sourceMappingURL=weather.js.map