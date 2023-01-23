"use client";

import { run } from "node:test";
import { useState, useEffect } from "react";

interface Props {
  myData: string;
  setTotalScore: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setStars: React.Dispatch<React.SetStateAction<number>>;
  placeholder: string;
  defaultInput: boolean;
  //totalScore: number|string[],
  totalScore: number;
  
}

const styles = {
  li: " p-2 font-bold ",
  li_green: "p-2 bg-green-300 font-bold",
  input: "card_Input text-center border border-gray-300 text-bold",
};

const Input = ({
  myData,
  setTotalScore,
  setScore,
  setStars,
  placeholder,
  defaultInput,
  totalScore,
}: Props) => {
 
  const [input, setInput] = useState("");
  const [checkMistake, setCheckMistake] = useState("");
  const [checkStyles, setCheckStyles] = useState("");

  //Save Input value into INPUT variable
  //Set read only for Input
  const handleChange = (e: any) => {
    setInput(e.target.value);

 /*   if(myData===e.target.value){
      e.target.readOnly = true;
    }*/
  };
  // Watch INPUT variable for changes
  useEffect(() => {
    runIT();
    
  }, [input]);

  const runIT = () => {
    if (myData === input) {
      // True === green border
      setCheckStyles("bg-green-300");

      //Props
      setTotalScore((count: number) => count + 1);
      setScore((count: number) => count + 1);
      setStars((count: number) => count + 1);
   
     
      const number = totalScore + 1;
      localStorage.setItem("totalScore", JSON.stringify(number));
    }


    if (myData.startsWith(input)) {
      // True === GREEN TEXT
      setCheckMistake("text-green-500");
    } else {
      setCheckMistake("text-red-500");
    }
  };
/*------------------------------------------
WATCH defaultInput for changes TRUE/FALSE
setCheckStyles TRUE / FALSE
setReadOnly TRUE / FALSE 
setInput => CLEAR VALUE IN INPUT
------------------------------------------*/
 
  useEffect(() => {
    setCheckStyles('');
    setInput("");
  }, [defaultInput]);


  return (
    <li className={styles.li + checkStyles}>
      <input
        type="text"
        value={input}
        className={styles.input + "text-gray-500 " + checkMistake}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </li>
  );
};

export default Input;
