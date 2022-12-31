import { useEffect, useState } from "react";
import WeatherAPI from "../api/weather-api";
import WeatherCurrent from "./weather-current";

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
			<WeatherCurrent data={results.current} location={location} />
		</div>
	);
}
