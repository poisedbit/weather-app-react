import { useEffect, useState } from "react";
import WeatherAPI from "../api/weather-api";
import WeatherCurrent from "./weather-current";

export default function Weather({ coordinates }) {
	const [x, y] = coordinates;
	const [results, setResults] = useState({});
	const [isDay, setIsDay] = useState(true);
	const [loading, setLoading] = useState(false);

	// get WeatherAPI data, if coordinates isn't empty
	useEffect(() => {
		if (coordinates !== undefined) {
			WeatherAPI.getForecastResults(x, y).then((results) => {
				console.log(results);
				setResults(() => results);
			});
		}
	}, [coordinates]);

	return (
		<div id="weather">
			<WeatherCurrent data={results.current} />
		</div>
	);
}
