import { useEffect, useState } from "react";
import Search from "./components/search";
import Weather from "./components/weather";

function App() {
	const [coordinates, setCoordinates] = useState([]);
	useEffect(() => {
		console.log(coordinates);
	}, [coordinates]);

	return (
		<div className="App">
			<h1 id="Title">Weather App</h1>
			<Search setCoordinates={setCoordinates} />
			<Weather coordinates={coordinates} />
		</div>
	);
}

export default App;
