import { useState } from "react";
import GeoAPI from "../api/geocoding-api";
import SearchOption from "./search-option";

export default function Search({ setOption }) {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [isOption, setIsOption] = useState(false);

	function getSearchResults(e) {
		e.preventDefault();
		setIsOption(false);

		if (query !== "") {
			GeoAPI.getSearchResults(query).then((results) => {
				setResults(() => results);
			});
		}
	}

	return (
		<div id="search">
			<form className="search-bar" action="#" method="GET">
				<input
					type="search"
					name="name"
					placeholder="search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") getSearchResults(e);
					}}
				/>
			</form>
			{!isOption ? (
				<ul className="search-list">
					{results.map((item, index) => (
						<SearchOption
							optionData={item}
							setOption={setOption}
							setIsOption={setIsOption}
							key={index}
						/>
					))}
				</ul>
			) : null}
		</div>
	);
}
