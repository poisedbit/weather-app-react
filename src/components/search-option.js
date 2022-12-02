export default function SearchOption({ optionData, setCoordinates }) {
	const { locationString, coordinates } = optionData;

	function handleClick() {
		setCoordinates(() => coordinates);
	}

	return <li onClick={handleClick}>{locationString}</li>;
}
