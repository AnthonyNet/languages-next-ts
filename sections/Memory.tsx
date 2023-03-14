"use client"

import MemoryCard from "../components/memoryCard/MemoryCard";
import { useState, useEffect } from "react";

interface Card {
  letter: string;
  select: string;
  }
 

function Memory() {
  const [count,setCount] = useState<number>(0)
  const [cards, setCards] = useState<any>([])

 const [store, setStore] = useState<string[]>([])

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
/* ---------------------------- */
/*        Setup random Cards          */
/* ---------------------------- */
  function resetCards(){
    const shuffled = [...items, ...items].sort(() => Math.floor(Math.random() * items.length));
   // const shuffled = [...items, ...items].sort(() => 0.5 - Math.random());
    setCards(shuffled)
    //console.log(shuffled);
  }

  useEffect(() => {
    resetCards()
  }, [])

/* ---------------------------- */


/* ---------------------------- */
/*       Compare Cards          */
/* ---------------------------- */


  useEffect(() => {
    console.log(store);
    
    if(store.length === 2){
      setTimeout(() => {
        setStore([])
      }, 1000)
    }

    if(store[0] === store[1] && store.length === 2){
      
     return alert('You found a match!')
    }
  }, [store])

  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <h3>Memory</h3>
      <article className="w-[80%] h-[90%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
        
        {cards.map((item:Card, index:number) => {
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
