import { useEffect, useState } from "react";
import WeatherAPI from "../api/weather-api";
import WeatherIcon from "./weather-icon";
import { Thermometer, Wind, Clock } from "phosphor-react";

export default function WeatherCard({ data, location }) {
	const [isDay, setIsDay] = useState(true);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [desc, setDesc] = useState("");

	useEffect(() => {
		if (data) {
			setIsDay(WeatherAPI.isDay(data.time));
			setTime(data.time.split("T")[1]);
			setDate(data.time.split("T")[0]);
			setDesc(WeatherAPI.translateWeatherCode(data.weathercode));
		}
	}, [data]);

	if (data) {
		return (
			<div id="weather-card">
				<div className="weather-card-header">
					<div className="weather-card-location">{location}</div>
					<div className="weather-card-datetime">
						<Clock size={32} />
						{date}, {time}
					</div>
				</div>
				<div className="weather-card-details">
					<div className="weather-card-details-main">
						<div id="weather-card-icon">
							<WeatherIcon
								weatherCode={data.weathercode}
								size={256}
								isDay={isDay}
							/>
						</div>
						<div className="weather-card-description">
							{desc.charAt(0).toUpperCase() + desc.slice(1)}
						</div>
					</div>
					<div className="weather-card-details-extra">
						<div className="weather-card-temp">
							<Thermometer size={64} />
							{data.temperature} °C
						</div>
						<div className="weather-card-windspeed">
							<Wind size={64} />
							{data.windspeed} Km/h
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div className="nothing">{">.<"}</div>;
	}
}
