import { useEffect, useState } from "react";
import Search from "./components/search";
import ThemeSwitch from "./components/theme-switch";
import Weather from "./components/weather";
import "./style.css";

function App() {
	const [option, setOption] = useState({});
	const [coordinates, setCoordinates] = useState([]);
	const [location, setLocation] = useState("");

	useEffect(() => {
		const savedOption = localStorage.getItem("option");

		if (savedOption) {
			setOption(() => JSON.parse(savedOption));
		}
	}, []);

	useEffect(() => {
		if (Object.keys(option).length !== 0) {
			setLocation(option.locationString);
			setCoordinates(option.coordinates);
		}
	}, [option]);

	return (
		<div className={`App`}>
			<ThemeSwitch />
			<header>
				<h1>Weather App</h1>
				<Search setOption={setOption} />
			</header>
			<main>
				<Weather coordinates={coordinates} location={location} />
			</main>
		</div>
	);
}

export default App;
