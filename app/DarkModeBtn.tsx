"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function DarkModeBtn(){
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

 const currentTheme = theme === "system" ? systemTheme : theme;
 
 

  return (
    <>
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="h-8 w-8 cursor-pointer text-cellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="h-8 w-8 cursor-pointer text-cellow-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkModeBtn;
 