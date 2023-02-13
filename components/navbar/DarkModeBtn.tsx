"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function DarkModeBtn(){
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) {
    return null;
  }

 const currentTheme = theme === "system" ? systemTheme : theme;
 
 const ButtonDark = () => (
  <BsFillMoonFill
  className="h-8 w-8 cursor-pointer text-cellow-500 motion-safe:animate-ping-slow"
  onClick={() => setTheme("dark")}
/>
 )

 const ButtonLight = () => (
  <BsFillSunFill
  className="h-8 w-8 cursor-pointer text-cellow-500 motion-safe:animate-spin-slow"
  onClick={() => setTheme("light")}
/>
  )



  return <div>
{currentTheme === "dark" ? <ButtonLight /> : <ButtonDark />}
    </div>;
};

export default DarkModeBtn;
 