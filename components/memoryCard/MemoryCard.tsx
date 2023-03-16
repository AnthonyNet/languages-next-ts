import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Card {
letter: string;
store: string[];
setStore: (store: string[]) => void;
backCardVisible: boolean;
setBackCardVisible: (backCardVisible: boolean) => void;

resetCards: () => void;
timer: any;
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

function Memory({ letter, store, setStore, backCardVisible, resetCards}: Card) {
  const [checkClick, setCheckClick] = useState<boolean>(false);
  ;
  

  function handleCardClick(e: React.MouseEvent<HTMLButtonElement>){
    const {target} = e;
    console.log((target as HTMLButtonElement).textContent);
    
   setStore([...store, (target as HTMLButtonElement).textContent as string])
   setCheckClick(true)

   if(store[0] !== (target as HTMLButtonElement).textContent && store.length > 0){
  
   // setScore(0)
    resetCards()
    alert(`Wrong answer! Your score:  -->WANNA NEW GAME?`)
    
  }
 
  if(store[0] === (target as HTMLButtonElement).textContent && store.length > 0){
  //setScore(score + 1)
  setStore([])
  }
  }

  



  return (
    <button  className={styles.button} onClick={handleCardClick}>
      <div className={`

      ${backCardVisible||checkClick?styles.button__div
        :null
      }
      
      `}>
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