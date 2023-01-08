'use client'

import React from "react";
import Input from './Card_Input';

interface JOJO{
 myData:{
  cz: string;
  base: string;
  pastSimple: string;
  pastSimple2?: string;
  pastParticiple: string;
  pastParticiple2?: string;
 },
  setTotalScore: React.Dispatch<React.SetStateAction<number>>,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setStars: React.Dispatch<React.SetStateAction<number>>
}


const Card_Inputs = ({ myData, setTotalScore, setScore, setStars }:JOJO) => {
 
  {
    /*check inputs values and change font, border or background */
  }

  const handleChange = (e: any) => {
    // const value = e.currentTarget.value;
    const value = e.target.value;
    const data = e.target.attributes.data.value;

    const inputElement = e.target;
    /*
    if (value === "") {
      inputElement.style.color = "gray";
    } else if (data === value) {
      inputElement.parentElement.style.backgroundColor = "MediumSeaGreen";

      inputElement.readOnly = true;

      setTotalScore((count) => +count + 1);
      setScore((count) => count + 1);
      setStars((count) => count + 1);
    } else if (data.startsWith(value)) {
      inputElement.style.color = "green";
      inputElement.style.fontWeight = "bold";
    } else {
      inputElement.style.color = "red";
      inputElement.style.fontWeight = "bold";
    }*/

    if (value === "") {
      inputElement.style.color = "gray";
    }

    if (data === value) {
      inputElement.parentElement.style.backgroundColor = "MediumSeaGreen";
      inputElement.readOnly = true;

      setTotalScore((count:number) => +count + 1);
      setScore((count:number) => count + 1);
      setStars((count:number) => count + 1);
    }
    if (data.startsWith(value)) {
      inputElement.style.color = "green";
      inputElement.style.fontWeight = "bold";
    } else {
      inputElement.style.color = "red";
      inputElement.style.fontWeight = "bold";
    }
  };

  return (
    <>
      <h5 className={"text-xl font-medium mb-2 border-b border-gray-300"}>
        {myData.cz}
      </h5>
      <ul className="flex flex-col justify-around text-center mb-2">
       
          <Input myData={myData.base} setTotalScore={setTotalScore} setScore={setScore} setStars={setStars}  />
          {/* }
          <input
            type="text"
            className="quizInput text-center border border-gray-300"
            placeholder="Přítomný čas"
            data={myData.base}
            onChange={handleChange}
  /> */}
       <Input myData={myData.pastSimple} setTotalScore={setTotalScore} setScore={setScore} setStars={setStars}  />
       {myData.pastSimple2&&<Input myData={myData.pastSimple2} setTotalScore={setTotalScore} setScore={setScore} setStars={setStars} />}
       <Input myData={myData.pastParticiple}  setTotalScore={setTotalScore} setScore={setScore} setStars={setStars}/>
       {myData.pastParticiple2&&<Input myData={myData.pastParticiple2} setTotalScore={setTotalScore} setScore={setScore} setStars={setStars} />}

      </ul>
    </>
  );
};

export default Card_Inputs;
