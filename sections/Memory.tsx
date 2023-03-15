"use client"

import MemoryCard from "../components/memoryCard/MemoryCard";

import { useState, useEffect } from "react";


interface Card {
  letter: string;
  check: boolean;
  counter: number;
  }
 

function Memory() {
  const [score, setScore] = useState<number>(0)
  const [cards, setCards] = useState<any>([])
  const [store, setStore] = useState<any>([])
  const [counter, setCounter] = useState<number>(10)
  const [backCardVisible, setBackCardVisible] = useState<boolean>(false)

  const items = [
     {letter: 'A', check: false}, 
      {letter: 'B', check: false},
      {letter: 'C', check: false},
      {letter: 'D', check: false},
      {letter: 'E', check: false},
      {letter: 'F', check: false},
      {letter: 'G', check: false},
      {letter: 'H', check: false},
  ]

  const timer = setTimeout(() => {
    if(counter > 0) {
        
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
    setCards(shuffled)
  }

  useEffect(() => {
    setBackCardVisible(true)
    resetCards()
    return () => clearTimeout(timer);
  }, [])


/* ---------------------------- */
/*       Compare Cards          */
/* ---------------------------- */


  useEffect(() => {
    console.log(store);
    
    if(store.length === 2 || store.length > 2){
      setTimeout(() => {
        setStore([])
      }, 1000)
    }

    if(store[0] === store[1] && store.length === 2){
    setScore(score + 1)
    }

    if(store[0] !== store[1] && store.length === 2){
      alert(`Wrong answer! Your score: ${score} -->WANNA NEW GAME?`)
      setScore(0)
      resetCards()
    }
  }, [store])

  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <h3>Memory</h3>
     <h2>{counter>0?counter:'Score: '+score}</h2>
     
      <article className="w-[80%] h-[80%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
        
        {cards.map((item:Card, index:number) => {
          return (
            <MemoryCard
              key={index}
              letter={item.letter}
              check={item.check}
              store={store}
              setStore={setStore}
              backCardVisible={backCardVisible}
              setBackCardVisible={setBackCardVisible}

            />
          );
        })
        }
       
      </article>
    </section>
  );
}

export default Memory;
