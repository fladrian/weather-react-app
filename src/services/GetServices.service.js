import axios from "./Countries.service";
import _axios from "./Weather.service"
const COUNTRY_REST_KEY = process.env.REACT_APP_COUNTRIES_KEY;
const COUNTRY_API_HEADER = {
	headers: {
		"X-CSCAPI-KEY": COUNTRY_REST_KEY
	}
}
const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY


const countries = "countries";
const cities = "cities"
const weather = "weather"


export const GetCountries = async () => {
	console.info(COUNTRY_REST_KEY, process.env.REACT_APP_WEATHER_API, WEATHER_KEY)
	return await axios.get(`${countries}`, COUNTRY_API_HEADER);
}

export const GetCities = async (country_iso) => {
	return await axios.get(`${countries}/${country_iso}/${cities}`, COUNTRY_API_HEADER);
}

export const GetWeather = async (city, country) => {
	const iso2 = country.toLowerCase()
	return await _axios.get(`${weather}?q=${city},${iso2}&appid=${WEATHER_KEY}`)
}
