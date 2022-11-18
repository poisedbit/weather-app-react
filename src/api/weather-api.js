export default class WeatherAPI {
	static async getForecastResults(latitude, longitude) {
		const data = await this.getData(latitude, longitude);
		const forecastResults = {};
		forecastResults.timezone = data.timezone;
		forecastResults.currentWeather = data.current_weather;
		forecastResults.hourly = data.hourly;
		forecastResults.hourly.units = data.hourly_units;
		forecastResults.daily = data.daily;
		forecastResults.daily.units = data.daily_units;

		return forecastResults;
	}
	static async getData(latitude, longitude) {
		const url = this.getURL(latitude, longitude);
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		return await response.json();
	}
	static getURL(latitude, longitude) {
		return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,weathercode,pressure_msl,surface_pressure,windspeed_10m,winddirection_10m,windgusts_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum&current_weather=true&timezone=auto`;
	}
}
