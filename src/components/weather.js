import { useEffect, useState } from "react";
import WeatherAPI from "../api/weather-api";
import WeatherCard from "./weather-card";

export default function Weather({ coordinates, location }) {
	const [x, y] = coordinates;
	const [results, setResults] = useState({});

	// get WeatherAPI data, if coordinates isn't empty
	useEffect(() => {
		if (x && y !== undefined) {
			WeatherAPI.getForecastResults(x, y).then((results) => {
				setResults(() => results);
			});
		}
	}, [coordinates]);

	return (
		<div id="weather">
			<WeatherCard data={results.current} location={location} />
		</div>
	);
}
