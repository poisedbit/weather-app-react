export default class WeatherAPI {
	static isDay(time) {
		const split = time.split("T")[1].split(":");

		if (split[0] >= 4 && split[0] < 18) {
			return true;
		}
		return false;
	}
	static translateWeatherCode(code) {
		let translation;

		switch (code) {
			case 0:
			case 1:
				translation = "clear";
				break;
			case 2:
				translation = "few clouds";
				break;
			case 3:
				translation = "overcast";
				break;
			case 45:
			case 48:
				translation = "fog";
				break;
			case 51:
			case 53:
			case 55:
			case 56:
			case 57:
			case 61:
			case 63:
			case 65:
			case 66:
			case 67:
			case 80:
			case 81:
			case 82:
				translation = "rain";
				break;
			case 71:
			case 73:
			case 75:
			case 77:
			case 85:
			case 86:
				translation = "snow";
				break;
			case 95:
			case 96:
			case 99:
				translation = "thunderstorm";
				break;
			default:
		}

		return translation;
	}
	static async getForecastResults(latitude, longitude) {
		const data = await this.getData(latitude, longitude);
		const results = {};

		results.timezone = data.timezone;
		results.current = data.current_weather;

		return results;
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
