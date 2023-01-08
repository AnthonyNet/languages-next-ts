"use client";

import { useState, useEffect } from "react";

interface Props{

  myData: string,
   setTotalScore: React.Dispatch<React.SetStateAction<number>>,
   setScore: React.Dispatch<React.SetStateAction<number>>,
   setStars: React.Dispatch<React.SetStateAction<number>>,
   placeholder: string,
   setDefaultInput: React.Dispatch<React.SetStateAction<boolean>>,
    defaultInput: boolean,
 }
 

const styles = {
    li: 'p-2 font-bold',
    li_green: 'p-2 bg-green-300 font-bold',
    input: 'text-center border border-gray-300 text-bold',
}

const Input = ({ myData, setTotalScore, setScore, setStars, placeholder, setDefaultInput, defaultInput}: Props) => {
  const [readOnly, setReadOnly] = useState(false);
  const [input, setInput] = useState("");
  const [checkMistake, setCheckMistake] = useState('');
  const [checkStyles, setCheckStyles] = useState(false);

  //Save Input value into INPUT variable
  const handleChange = (e: any) => {
    setInput(e.target.value);
    setCheckStyles(false)
  };

  // Watch INPUT variable for changes
 useEffect(()=>{
    if (myData === input) {
        // True === green border
        setCheckStyles(true);
       
        setReadOnly(true);
        setInput('');

        //Props
        setTotalScore((count:number) => +count + 1);
        setScore((count:number) => count + 1);
        setStars((count:number) => count + 1);
      }

    if(myData.startsWith(input)) {
        //True === green text
        setCheckMistake('text-green-500');
    } else {
        setCheckMistake('text-red-500');
    }

 },[input])

useEffect(()=>{
  setCheckStyles(false);
  
},[defaultInput])


  return (
    <li className={checkStyles?styles.li_green:styles.li}>
      <input
        type="text"
        className={styles.input +' ' + checkMistake + ' myInputs' }
        onChange={handleChange}
        readOnly={readOnly}
        placeholder={placeholder}
      />
     
    </li>
  );
};

export default Input;
