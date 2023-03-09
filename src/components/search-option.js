export default function SearchOption({ optionData, setOption, setIsOption }) {
	const { locationString } = optionData;

	function select() {
		setIsOption(true);
		setOption(() => optionData);
		localStorage.setItem("option", JSON.stringify(optionData));
	}

	return (
		<li className="search-option" onClick={select}>
			{locationString}
		</li>
	);
}
