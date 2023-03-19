"use client"

import MemoryCard from "../components/memoryCard/MemoryCard";

import { useState, useEffect } from "react";


interface Card {
  letter: string;
  check: boolean;

  }
 

function Memory() {
  const [score, setScore] = useState<number>(0)
  const [cards, setCards] = useState<any>([])
  const [store, setStore] = useState<string[]>([])
  const [counter, setCounter] = useState<number>(10)
  const [backCardVisible, setBackCardVisible] = useState<boolean>(false)
  const [resetAllCards, setResetAllCards] = useState<boolean>(false)

  const items = [
     {letter: 'A', select: '1'}, 
      {letter: 'B', select: '2'},
      {letter: 'C', select: '3'},
      {letter: 'D', select: '4'},
      {letter: 'E', select: '5'},
      {letter: 'F', select: '6'},
      {letter: 'G', select: '7'},
      {letter: 'H', select: '8'},
  ]

  const timer = setTimeout(() => {
    if(counter > 0) {
      setResetAllCards(!resetAllCards)
      setBackCardVisible(true)
        setCounter(counter -1 )
        
     } else {
      setBackCardVisible(false)
     }
    }, 1000);


/* ---------------------------- */
/*        Setup random Cards          */
/* ---------------------------- */
  function resetCards(){
    const shuffled = [...items, ...items].sort(() => Math.floor(Math.random() * items.length));
   // const shuffled = [...items, ...items].sort(() => 0.5 - Math.random());
    setCards(shuffled)
    setStore([])
    setCounter(10)
    
    return () => clearTimeout(timer);
  }

  useEffect(() => {
   
    resetCards()
    return () => clearTimeout(timer);
  }, [])

/* ---------------------------- */


/* ---------------------------- */
/*       Compare Cards          */
/* ---------------------------- */




  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <h3>Memory</h3>
     <h2>{counter>0?counter:'Score: '+score}</h2>
     
      <article className="w-[80%] h-[80%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
        
        {items.map((item, index) => {
          return (
            <MemoryCard
              key={index}
              letter={item.letter}
              store={store}
              setStore={setStore}
             
            />
          );
        })
        }
       
      </article>
    </section>
  );
}

export default Memory;