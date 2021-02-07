import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { fetchWeather } from "./api/fetchWeather";

function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = async (e) => {
		if (e.key === "Enter") {
			const data = await fetchWeather(query);
			console.log(data);
			setWeather(data);
			setQuery("");
		}
	};

	// const sunrise = weather.sys.sunrise;
	// const date = new Date(sunrise);
	// const hours = date.getHours();
	// const minutes = "0" + date.getMinutes();
	// const seconds = "0" + date.getSeconds();

	// const formattedTime = hours + ":" + minutes + ":" + seconds.substr(-2);
	return (
		<>
			<div className="main-container">
				<h1 style={{ color: "#ffffff" }}>Weather Forecaster Application</h1>
				<input
					type="text"
					className="search"
					placeholder="Search..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyPress={search}
				/>

				{weather.main && (
					<div className="city">
						<h2 className="city-name">
							<span>{weather.name}</span>
							<sup>{weather.sys.country}</sup>
						</h2>
						<div className="city-temp">
							{Math.round(weather.main.temp)}
							<sup>&deg;C</sup>
						</div>

						<div className="info">
							<img
								className="city-icon"
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt={weather.weather[0].description}
							/>
							<p>{weather.weather[0].description}</p>
						</div>
					</div>
				)}
				<h3 style={{ color: "#ffffff" }}>
					Created By Ivan Christian Jay Funcion
				</h3>
			</div>
		</>
	);
}

export default App;
