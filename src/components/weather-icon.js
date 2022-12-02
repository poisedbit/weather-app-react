import WeatherAPI from "../api/weather-api";
import {
	Sun,
	Moon,
	CloudSun,
	CloudMoon,
	Cloud,
	CloudFog,
	CloudRain,
	CloudSnow,
	CloudLightning,
} from "phosphor-react";

export default function WeatherIcon({ weatherCode, size, isDay }) {
	const iconSize = size;
	let icon;

	switch (WeatherAPI.translateWeatherCode(weatherCode)) {
		case "clear":
			if (isDay) icon = <Sun size={iconSize} />;
			icon = <Moon size={iconSize} />;
			break;
		case "few clouds":
			if (isDay) icon = <CloudSun size={iconSize} />;
			icon = <CloudMoon size={iconSize} />;
			break;
		case "overcast":
			icon = <Cloud size={iconSize} />;
			break;
		case "fog":
			icon = <CloudFog size={iconSize} />;
			break;
		case "rain":
			icon = <CloudRain size={iconSize} />;
			break;
		case "snow":
			icon = <CloudSnow size={iconSize} />;
			break;
		case "thunderstorm":
			icon = <CloudLightning size={iconSize} />;
			break;
		default:
	}

	return <>{icon}</>;
}
