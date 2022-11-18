export default function SearchOption({ optionData, select }) {
	const { locationString, coordinates } = optionData;

	function handleClick() {
		select(() => coordinates);
	}

	return <li onClick={handleClick}>{locationString}</li>;
}
