"use client";

import { useState, useEffect } from "react";

const styles = {
    li: 'p-2 font-bold',
    li_green: 'p-2 bg-green-300 font-bold',
    input: 'text-center border border-gray-300 text-bold',
}

const Input = ({ myData }: any) => {
    const [readOnly, setReadOnly] = useState(false);
  const [input, setInput] = useState("");
  const [checkMistake, setCheckMistake] = useState('');
  const [checkStyles, setCheckStyles] = useState(false);


  //Save Input value into INPUT variable
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  // Watch INPUT variable for changes
 useEffect(()=>{
    if (myData === input) {
        // True === green border
        setCheckStyles(true);
        setReadOnly(true);
      }

    if(myData.startsWith(input)) {
        //True === green text
        setCheckMistake('text-green-500');
    } else {
        setCheckMistake('text-red-500');
    }
    //setToDefault
    if(input === '') {
        setCheckMistake('');
        setCheckStyles(false);
        setReadOnly(false);
    }
    

 },[input])


  return (
    <li className={checkStyles?styles.li_green:styles.li}>
      <input
        type="text"
        className={styles.input +' ' + checkMistake}
        placeholder="Přítomný čas"
        onChange={handleChange}
        readOnly={readOnly}
      />
    </li>
  );
};

export default Input;
