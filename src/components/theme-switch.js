import { Moon, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState("dark");

	function toggleTheme() {
		setTheme((mode) => (mode === "dark" ? "light" : "dark"));
	}

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
