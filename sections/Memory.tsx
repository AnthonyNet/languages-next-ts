"use client";

import MemoryCard from "../components/memoryCard/MemoryCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IrregularVerbs, VerbenData } from "../myData";

interface Card {
  letter: string;
  check: boolean;
  select: number;
  cz?: string;
  eng?: string;
}

const styles = {
  
  button:
    "relative flex items-center justify-center border-2 border-red-300 cursor-pointer group perspective",
  button_Clicked: "relative flex items-center justify-center border-2 border-red-300 cursor-pointer group perspective border-green-500 border-2",  
    button__div:
    "preserve-3d group my-rotate-y-180 w-full h-full duration-1000",
 /* button__div:
    "preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000",*/
  button__div__div: "w-full h-full flex items-center justify-center",
  cardBack:
    "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden bg-white w-full h-full",
 cardBack__div: "w-full h-full flex flex-col items-center justify-center text-gray-800"
} as const;

function Memory() {
  const [score, setScore] = useState<number>(0);
  const [cards, setCards] = useState<any>([]);
  const [store, setStore] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(10);
  const [resetAllCards, setResetAllCards] = useState<boolean>(false);

  const[correct, setCorrect] = useState<number[]>([]);
  const[checkClick, setCheckClick] = useState<boolean>(false);
  const [border, setBorder] = useState<string>(styles.button);

  const createData = (english) => {
    const RAW = [...english]
      .sort(() => Math.floor(Math.random() * english.length))
      .slice(0, 8)
      
  const randomEnglish = RAW
    .map((item, index) => ({ select: index, eng: item.base, check: false }));

   const randomCzech = RAW
     .map((item, index) => ({ select: index, cz: item.cz, check: false }));

    setCards(
      [...randomEnglish, ...randomCzech].sort(() =>
        Math.floor(Math.random() * randomEnglish.length)
      )
    );
  };

  useEffect(() => {
    console.log(cards)
  }, [cards])


  /* ---------------------------- */
  /*        Setup random Cards          */
  /* ---------------------------- */
  function resetCards() {
    setStore([]);

  }

  useEffect(() => {
    createData(IrregularVerbs);
    resetCards();
  }, []);

  /* ---------------------------- */
  /*       Compare Cards          */
  /* ---------------------------- */
  function handleCardClick(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    console.log(e.currentTarget);
    
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


  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <div>
        <button onClick={() => setCards(IrregularVerbs)}>B1</button>
        <button onClick={() => setCards(VerbenData)}>C1</button>
      </div>
      <h3>Memory</h3>
      <h2>{"Score: " + score}</h2>

      <article className="w-[80%] h-[80%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
        {cards.map((item: Card, index: number) => {
          return (
            <motion.button key={index}
            className={styles.button}
            onClick={handleCardClick}
           // disabled={checkClick}
          >
            <motion.div
              className={styles.button__div}
              animate={{ rotateY:checkClick ? 180 : 0 }}
            >
              <motion.div className={styles.button__div__div}>
               
                  <h2 className="text-4xl">{item.cz?item.cz:item.eng}</h2>
              
              </motion.div>
              <motion.div className={styles.cardBack}>
                <div className={styles.cardBack__div}>
                  <h1 className="text-4xl sm:text-8xl">👍</h1>
                </div>
              </motion.div>
            </motion.div>
          </motion.button>
          );
        })}
      </article>
    </section>
  );
}

export default Memory;
