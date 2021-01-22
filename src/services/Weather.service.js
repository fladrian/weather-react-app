import axios from "axios";
const baseURL = process.env.REACT_APP_WEATHER_API;
const baseApi = axios.create({
	baseURL
});
export default baseApi
