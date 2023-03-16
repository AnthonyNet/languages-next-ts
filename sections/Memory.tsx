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


  let items = [
     {word: 'Auto', translate: "Car", select: '0', answered: false}, 
      {word: 'Brick', translate: "Cihla", select: '1', answered: false},
      {word: 'Card', translate: "Karta", select: '2', answered: false},
      {word: 'Dope', translate: "Hustý", select: '3', answered: false},
      {word: 'Ex', translate: "Bývalý", select: '4', answered: false},
      {word: 'Fold', translate: "skládat", select: '5', answered: false},
      {word: 'Goal', translate: "Gól", select: '6', answered: false},
      {word: 'Hope', translate: "Naděje", select: '7', answered: false},
  ]
/* ---------------------------- */
/*        Setup random Cards          */
/* ---------------------------- */
  function resetCards(){
    const shuffled = [...items].sort(() => Math.floor(Math.random() * items.length));
   // const shuffled = [...items, ...items].sort(() => 0.5 - Math.random());
    setCards(shuffled)
    //console.log(shuffled);
  }

  useEffect(() => {
    resetCards()
  }, [])

/* ---------------------------- */

function handleClick(item){

setStore([...store, item.select])

if(store[0] === item.select){
 
  items[item.select].answered = true
  console.log(items);
  
  return setStore([])
}
}

/* ---------------------------- */
/*       Compare Cards          */
/* ---------------------------- */




  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <h3>Memory</h3>
      <article className="w-[80%] h-[90%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
        
        {items.map((item, index) => {
          return (
            <div key={index}
             className={"border-4 flex justify-center items-center " + (items[index].answered?' bg-green-400':null)}
             onClick={() => handleClick(item)}
             >
              {item.word}
            </div>
          )
        })
        }

      {cards.map((item, index) => {
          return (
            <div key={index}
             className={`border-4 flex justify-center items-center ${items[index].answered?' bg-green-400':null}`}
             onClick={() => handleClick(item)}
             >
              {item.translate}
            </div>
          )
        })
        }
       
      </article>
    </section>
  );
}

export default Memory;
