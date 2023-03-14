import { motion } from "framer-motion";
import { useState, useEffect } from "react";
interface Card {
letter: string;
store: string[];
setStore: (store: string[]) => void;
}

const styles = {
  
  button:
    "relative flex items-center justify-center border-2 border-red-300 cursor-pointer group perspective",
    button__div:
    "preserve-3d group my-rotate-y-180 w-full h-full duration-1000",
 /* button__div:
    "preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000",*/
  button__div__div: "w-full h-full",
  cardBack:
    "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden bg-white w-full h-full",
 cardBack__div: "text-center flex flex-col items-center text-gray-800"
} as const;

function Memory({ letter, store, setStore}: Card) {
  const [checkClick, setCheckClick] = useState(false);

  function handleCardClick(){
   setStore([...store, letter])
   setCheckClick(true)


  }


  return (
    <button  className={styles.button} onClick={handleCardClick}>
      <div className={`${checkClick&&styles.button__div}`}>
        <div className={styles.button__div__div}>
         
        </div>

        <div className={styles.cardBack}>
          <div className="w-full h-full flex justify-center items-center">

          <h2 className="text-3xl font-semibold self-center">
             {letter}
            </h2>
          </div>
         
         
        </div>
      </div>
    </button>
  );
}

export default Memory;
