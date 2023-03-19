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
  const [counter, setCounter] = useState<number>(10)
  const [backCardVisible, setBackCardVisible] = useState<boolean>(false)
  const [resetAllCards, setResetAllCards] = useState<boolean>(false)

  

 /* const randomEnglish = [...english].sort(() => Math.floor(Math.random() * english.length)).slice(0, 8).map((item,index)=>({select: index, language: {english: item.base}}))
  const randomGerman = [...german].sort(() => Math.floor(Math.random() * german.length)).slice(0, 8)*/

  //fix thecreateData function 
  const createData =  (english) => {
   const RAW = [...english].sort(() => Math.floor(Math.random() * english.length)).slice(0, 8)

    const randomEnglish = RAW.map((item,index)=>({select: index, eng: item.base}))

    const randomCzech = RAW.map((item,index)=>({select: index, cz: item.cz}))
   
    setCards([...randomEnglish, ...randomCzech].sort(() => Math.floor(Math.random() * randomEnglish.length)))
  
  }

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
 
    setStore([])
    setCounter(10)
    
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    createData(IrregularVerbs)
   
    resetCards()
    return () => clearTimeout(timer);
  }, [])



/* ---------------------------- */
/*       Compare Cards          */
/* ---------------------------- */





  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <div>
        <button onClick={()=>setCards(IrregularVerbs)}>B1</button>
        <button onClick={() => setCards(VerbenData)}>C1</button>
      </div>
      <h3>Memory</h3>
     <h2>{counter>0?counter:'Score: '+score}</h2>
     
      <article className="w-[80%] h-[80%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
     
      {cards.map((item:Card, index:number) => {
          return (
            <MemoryCard
              key={index}
              select={item.select}
              item={item.cz?item.cz:item.eng}
              store={store}
              setStore={setStore}
              backCardVisible={backCardVisible}
              resetCards= {resetCards}
              resetAllCards = {resetAllCards}
              score={score}
              setScore={setScore}
            />
          );
        })
        }
       
      </article>
    </section>
  );
}

export default Memory;