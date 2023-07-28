"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


function DarkModeBtn(){
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    if(theme === "system") {
	  setTheme("blue");
	}
  }, []); /*Missing dependency */

  if (!mounted) {
	setTheme("blue");
    return null;
  }

 const currentTheme = theme === "system" ? systemTheme : theme;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
		setTheme(e.target.value);
	};

  return (

			<select
				className="outline-none border-animation bg-transparent cursor-pointer text-xl xl:text-3xl"
				title="col"
				name="colors"
				id="colors"
				onChange={handleChange}>
				<option value="blue">Blue</option>
				<option value="green">Green</option>
				<option value="violet">Violet</option>
				<option value="pink">Pink</option>
				<option value="yellow">Yellow</option>
				<option value="light">Light</option>
			</select>

	);
};

export default DarkModeBtn;
