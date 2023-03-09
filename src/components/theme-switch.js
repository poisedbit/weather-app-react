import { Moon, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState("");

	function toggleTheme() {
		setTheme((mode) => (mode === "dark" ? "light" : "dark"));
		if (theme === "dark") {
			localStorage.setItem("theme", "light");
		} else {
			localStorage.setItem("theme", "dark");
		}
	}

	// load theme or set it the first time
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");

		if (!savedTheme) {
			setTheme("dark");
		} else {
			setTheme(savedTheme);
		}
	}, []);

	// attach css class to document body
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<div className={`theme-switch ${theme}`} onClick={toggleTheme}>
			{theme === "dark" ? (
				<Moon size={32} color="#d2e9f8" />
			) : (
				<SunDim size={32} />
			)}
		</div>
	);
}
