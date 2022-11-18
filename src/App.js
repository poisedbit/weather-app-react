import { useState } from "react";
import Search from "./components/search";
import Weather from "./components/weather";

function App() {
	const [coordinates, useCoordinates] = useState([]);

	return (
		<div className="App">
			<Search select={useCoordinates} />
		</div>
	);
}

export default App;
