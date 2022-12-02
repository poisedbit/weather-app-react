import { useEffect, useRef, useState } from "react";
import GeoAPI from "../api/geocoding-api";
import SearchOption from "./search-option";

export default function Search({ setCoordinates }) {
	const [inputValue, setInputValue] = useState("");
	const [results, setResults] = useState([]);
	// remove search list when: user presses enter, user clicks on an option

	function handleChange(e) {
		setInputValue(e.target.value);
	}
	function handleKeyPress(e) {
		if (e.key === "Enter") {
			setCoordinates(() =>
				results.length !== 0 ? results[0].coordinates : []
			);
		}
	}
	// get GeoAPI data, if inputValue isn't empty
	useEffect(() => {
		if (inputValue !== "") {
			GeoAPI.getSearchResults(inputValue).then((results) => {
				setResults(() => results);
			});
		}

		return () => {};
	}, [inputValue]);

	return (
		<div className="search">
			<form className="query" action="#" method="GET">
				<label for="query-input">Location</label>
				<input
					id="query-input"
					type="search"
					placeholder="search"
					value={inputValue}
					onChange={handleChange}
					onKeyPress={handleKeyPress}
				/>
			</form>
			<ul>
				{results.map((item, index) => (
					<SearchOption
						optionData={item}
						setCoordinates={setCoordinates}
						key={index}
					/>
				))}
			</ul>
		</div>
	);
}
