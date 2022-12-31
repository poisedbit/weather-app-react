import { useEffect, useState } from "react";
import Search from "./components/search";
import ThemeSwitch from "./components/theme-switch";
import Weather from "./components/weather";

function App() {
	const [option, setOption] = useState({});
	const [coordinates, setCoordinates] = useState([]);
	const [location, setLocation] = useState("");

	useEffect(() => {
		if (Object.keys(option).length !== 0) {
			setLocation(option.locationString);
			setCoordinates(option.coordinates);
		}
	}, [option]);

	return (
		<div className={`App`}>
			<header>
				<h1>Weather App</h1>
			</header>
			<main>
				<Search setOption={setOption} />
				<Weather coordinates={coordinates} location={location} />
			</main>
			<ThemeSwitch />
		</div>
	);
}

export default App;
