import { useEffect, useState } from "react";
import GeoAPI from "../api/geocoding-api";
import SearchOption from "./search-option";

export default function Search({ select }) {
	const [inputValue, setInputValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	function handleChange(e) {
		setInputValue(e.target.value);
	}
	function handleKeyPress(e) {
		if (e.key === "Enter") {
			select(() => searchResults[0].coordinates);
		}
	}

	// get GeoAPI data
	useEffect(() => {
		const asyncFunc = async () => {
			const results = await GeoAPI.getSearchResults(inputValue);

			setSearchResults(() => results);
		};

		asyncFunc();
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
				{searchResults.map((item, index) => (
					<SearchOption
						optionData={item}
						select={select}
						key={index}
					/>
				))}
			</ul>
		</div>
	);
}
