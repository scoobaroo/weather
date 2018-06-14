const API_KEY = "092750456e9d1587d95d6c3def4a5f6d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log("Request:", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}