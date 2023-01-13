"use client";

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
  li: "p-2 font-bold",
  li_green: "p-2 bg-green-300 font-bold",
  input: "text-center border border-gray-300 text-bold",
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
  const [readOnly, setReadOnly] = useState(false);
  const [input, setInput] = useState("");
  const [checkMistake, setCheckMistake] = useState("");
  const [checkStyles, setCheckStyles] = useState(false);

  //Save Input value into INPUT variable
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  // Watch INPUT variable for changes
  useEffect(() => {
    runIT();
    //eslint-disable-next-line
  }, [input]);

  const runIT = () => {
    if (myData === input) {
      // True === green border
      setCheckStyles(true);
      setReadOnly(true);

      //Props
      setTotalScore((count: number) => count + 1);
      setScore((count: number) => count + 1);
      setStars((count: number) => count + 1);
      // localStorage.setItem("totalScore", JSON.stringify(totalScore + 1));
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
    setCheckStyles(false);
    setReadOnly(false);
    setInput("");
  }, [defaultInput]);

  return (
    <li className={checkStyles ? styles.li_green : styles.li}>
      <input
        type="text"
        value={input}
        className={styles.input + "text-gray-500 " + checkMistake}
        onChange={handleChange}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </li>
  );
};

export default Input;
