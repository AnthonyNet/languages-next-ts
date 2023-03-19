"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Card {
item: string;
select: number;
store: number[];
setStore: (store: number[]) => void;

resetCards: () => void;
resetAllCards: boolean;
score: number;
setScore: (score: number) => void;

setCards: (cards: any) => void;
cards: any;
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

function Memory({ item, select, store, setStore, resetCards, resetAllCards, score, setScore, correct, setCorrect, setCards, cards, key}: Card) {
  const [checkClick, setCheckClick] = useState<boolean>(false);
  ;

[1,5,7]


  

 function handleCardClick(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
  
    setStore([...store, select])
    if(store.length === 1){
      if(store[0] === select){
        setCorrect([...correct, select])
        setCheckClick(true)
        setStore([])
        setScore(score +1 )
        setCards(cards.map(item=> item[key].check===true))
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
        animate={{ rotateY:checkClick ? 180 : 0 }}
      >
        <motion.div className={styles.button__div__div}>
         
            <h2 className="text-4xl">{item}</h2>
        
        </motion.div>
        <motion.div className={styles.cardBack}>
          <div className={styles.cardBack__div}>
            <h1 className="text-4xl sm:text-8xl">👍</h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.button>

  </>
}

export default Memory;