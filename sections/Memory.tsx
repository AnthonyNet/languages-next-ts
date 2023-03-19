"use client";

import MemoryCard from "../components/memoryCard/MemoryCard";

import { useState, useEffect } from "react";
import { IrregularVerbs, VerbenData } from "../myData";

interface Card {
  letter: string;
  check: boolean;
  select: number;
  cz?: string;
  eng?: string;
}

function Memory() {
  const [score, setScore] = useState<number>(0);
  const [cards, setCards] = useState<any>([]);
  const [store, setStore] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(10);
  const [resetAllCards, setResetAllCards] = useState<boolean>(false);

  const[correct, setCorrect] = useState<number[]>([]);


  const createData = (english) => {
    const RAW = [...english]
      .sort(() => Math.floor(Math.random() * english.length))
      .slice(0, 8)
      
  const randomEnglish = RAW
    .map((item, index) => ({ select: index, eng: item.base }));

   const randomCzech = RAW
     .map((item, index) => ({ select: index, cz: item.cz }));

    setCards(
      [...randomEnglish, ...randomCzech].sort(() =>
        Math.floor(Math.random() * randomEnglish.length)
      )
    );
  };



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
            <MemoryCard
              key={index}
              select={item.select}
              item={item.cz ? item.cz : item.eng}
              store={store}
              setStore={setStore}
             
              resetCards={resetCards}
              resetAllCards={resetAllCards}
              score={score}
              setScore={setScore}

              correct={correct}
              setCorrect={setCorrect}
            />
          );
        })}
      </article>
    </section>
  );
}

export default Memory;
