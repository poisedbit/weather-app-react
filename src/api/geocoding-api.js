export default class GeoAPI {
	static async getSearchResults(searchString) {
		const data = await this.getData(searchString);
		const searchResults = [];

		data.results.forEach((item, index) => {
			if (index < 5) {
				const locationData = [
					item.country,
					item.admin1,
					item.admin2,
					item.admin3,
					item.admin4,
				];
				const coordinates = [item.latitude, item.longitude];
				let locationString = "";

				if (locationData[0]) locationString += locationData[0];
				for (let i = 1; i < 4; i++) {
					if (locationData[i])
						locationString += `, ${locationData[i]}`;
				}

				searchResults.push({ locationString, coordinates });
			}
		});

		return searchResults;
	}
	static async getData(searchString) {
		const url = this.getURL(searchString);
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		return await response.json();
	}
	static getURL(searchString) {
		return `https://geocoding-api.open-meteo.com/v1/search?name=${searchString}`;
	}
}
