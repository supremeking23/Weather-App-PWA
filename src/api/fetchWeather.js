import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "b2f4e668ba7cc97ab8b2ac8f0f1c6efc";

export const fetchWeather = async (query) => {
	//response
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metrics",
			APPID: API_KEY,
		},
	});

	return data;
};
