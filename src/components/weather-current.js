import { useEffect, useState } from "react";
import WeatherAPI from "../api/weather-api";
import WeatherIcon from "./weather-icon";
import { Thermometer, Wind, Clock } from "phosphor-react";

export default function WeatherCurrent({ data, location }) {
	const [isDay, setIsDay] = useState(true);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [desc, setDesc] = useState("");

	const iconSize = 32;
	const detailSize = 32;

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
			<div className="weather-current">
				<div className="icon">
					<WeatherIcon
						weatherCode={data.weathercode}
						size={32}
						isDay={isDay}
					/>
				</div>
				<div className="info">
					<div className="header">
						<div className="description">{desc}</div>
						<div className="location">{location}</div>
					</div>
					<div className="details">
						<div className="temp">
							<Thermometer size={32} />
							{data.temperature} °C
						</div>
						<div className="windspeed">
							<Wind size={32} />
							{data.windspeed} Km/h
						</div>
						<div className="datetime">
							<Clock size={32} />
							{date}, {time}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
