"use client"

import MemoryCard from "../components/memoryCard/MemoryCard";

import { useState, useEffect } from "react";
import { IrregularVerbs, VerbenData } from "../myData";

interface Card {
  id: number;
  cz?: string;
  eng?: string;
 base: string;
  pastParticiple: string;
  pastSimple: string;
  
  }
 

function Memory() {
 

  const [score, setScore] = useState<number>(0)
  const [cards, setCards] = useState<any>([])
  const [store, setStore] = useState<number[]>([])
  const [prev,setPrev] = useState<number>(-1)

  const createData =  (english) => {
   const RAW = [...english].sort(() => Math.floor(Math.random() * english.length)).slice(0, 8)

    const randomEnglish = RAW.map((item,index)=>({select: index, eng: item.base, check:false}))

    const randomCzech = RAW.map((item,index)=>({select: index, cz: item.cz, check: false}))
   
    setCards([...randomEnglish, ...randomCzech].sort(() => Math.floor(Math.random() * randomEnglish.length)))
  
  }



/* ---------------------------- */
/*        Setup random Cards          */
/* ---------------------------- */


  useEffect(() => {
    createData(IrregularVerbs)
   
  }, [])

useEffect(() => {
  console.log(store);
  
}, [store])

/* ---------------------------- */
/*       Compare Cards          */
/* ---------------------------- */
function check(current){
  if(cards[prev].select === cards[current].select){
    setScore(score + 1)
    setStore([...store, cards[prev].select])
    setCards(cards.map((item:Card, index:number) => {
      if(index === prev || index === current){
        return {...item, check: true}
      }else {
        return item
      }
    }))
  }
  setPrev(-1)
}

function handleClick(id:number, select:number){
if(prev === -1){
  setPrev(id)
  return
}else {
 check(id)
}
}
  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <div>
        <button onClick={()=>setCards(IrregularVerbs)}>B1</button>
        <button onClick={() => setCards(VerbenData)}>C1</button>
      </div>
      <h3>Memory</h3>
     <h2>{score}</h2>
     
      <article className="w-[80%] h-[80%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
     
      {cards.map((item:Card, index:number) => {
          return (
            <MemoryCard
              key={index}
              id={index}
              item={item}
              handleClick={handleClick}
            />
          );
        })
        }
       
      </article>
    </section>
  );
}

export default Memory;