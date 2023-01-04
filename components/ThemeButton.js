
import {useState} from 'react'
import {GiNightSky} from "react-icons/gi"

import { FaRegLightbulb } from 'react-icons/fa';

const ThemeButton = () => {
const [darkMode, setDarkMode] = useState(true)

 
        const changeTheme = ()=>{
            setDarkMode(!darkMode)
        }

       return <button onClick={changeTheme}>{!darkMode? <GiNightSky />: <FaRegLightbulb />}</button>
    
    
  
}

export default ThemeButton