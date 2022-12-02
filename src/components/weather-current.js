import { useEffect, useState } from "react";
import WeatherAPI from "../api/weather-api";
import WeatherIcon from "./weather-icon";
import { Thermometer, Wind, Clock } from "phosphor-react";

export default function WeatherCurrent({ data }) {
	const [isDay, setIsDay] = useState(true);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	useEffect(() => {
		if (data) {
			setIsDay(WeatherAPI.isDay(data.time));
			setTime(data.time.split("T")[1]);
			setDate(data.time.split("T")[0]);
		}
	}, [data]);

	if (data) {
		return (
			<div className="weather-current">
				<WeatherIcon
					weatherCode={data.weathercode}
					size={32}
					isDay={isDay}
				/>
				<div className="info">
					<div className="temp">
						<Thermometer size={32} />
						<h2>{data.temperature} °C</h2>
					</div>
					<div className="windspeed">
						<Wind size={32} />
						<h3>{data.windspeed} Km/h</h3>
					</div>
					<div className="datetime">
						<Clock size={32} />
						<h3>
							{date}, {time}
						</h3>
					</div>
				</div>
			</div>
		);
	}
}
