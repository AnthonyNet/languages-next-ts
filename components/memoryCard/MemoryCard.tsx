"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Card {
item: string;
select: number;
store: number[];
setStore: (store: number[]) => void;
backCardVisible: boolean;
resetCards: () => void;
resetAllCards: boolean;
score: number;
setScore: (score: number) => void;
}

const styles = {
  
  button:
    "relative flex items-center justify-center border-2 border-red-300 cursor-pointer group perspective",
    button__div:
    "preserve-3d group my-rotate-y-180 w-full h-full duration-1000",
 /* button__div:
    "preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000",*/
  button__div__div: "w-full h-full flex items-center justify-center",
  cardBack:
    "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden bg-white w-full h-full",
 cardBack__div: "w-full h-full flex flex-col items-center justify-center text-gray-800"
} as const;

function Memory({ item, select, store, setStore, backCardVisible, resetCards, resetAllCards, score, setScore}: Card) {
  const [checkClick, setCheckClick] = useState<boolean>(false);
  ;

useEffect(() => {
  setCheckClick(false)
}, [resetAllCards])
  

  function handleCardClick(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
   setCheckClick(true)
    setStore([...store, select])
    if(store.length === 1){
      if(store[0] === select){
        setStore([])
        setScore(score +1 )
      } else {
        alert('Wrong! Try again!')
        setScore(0)
        setTimeout(() => {
          resetCards()
        }, 3000); 

      }
    }
  }



  return <>
    <motion.button
      className={styles.button}
      onClick={handleCardClick}
      disabled={checkClick}
    >
      <motion.div
        className={styles.button__div}
        animate={{ rotateY: backCardVisible||checkClick ? 0 : 180 }}
      >
        <motion.div className={styles.button__div__div}>
         
            <h2 className="text-4xl">{item}</h2>
        
        </motion.div>
        <motion.div className={styles.cardBack}>
          <div className={styles.cardBack__div}>
            <h1 className="text-4xl sm:text-8xl">?</h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.button>

  </>
}

export default Memory;