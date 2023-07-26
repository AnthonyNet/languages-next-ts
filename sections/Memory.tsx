"use client";

import MemoryCard from "../components/memoryCard/MemoryCard";

import { useState, useEffect } from "react";
import { IrregularVerbs, VerbenData } from "../myData";

interface Item {
  readonly cz?: string;
  readonly eng?: string;
  readonly select: number;
  check: boolean;
  click: boolean;
}

interface Data {
  readonly cz: string;
  readonly base: string;
  readonly pastSimple: string;
  readonly pastParticiple: string;
  readonly pastParticiple2?: string;
}

const styles = {
	section: "w-full  flex flex-col items-center justify-center .h-100-dvh",
	section__div: "w-[200px] flex justify-between p-2 sm:p-4 font-bold mt-[10vh]",
	h2: "text-lg sm:text-2xl",
	navItem: "__nav-item",
	article_cover: "w-full h-full grid items-center ",
	article:"w-full  max-h-[800px] min-h-[80vh] grid grid-cols-2 sm:grid-cols-4 grid-rows-8 sm:grid-rows-3 gap-2 sm:gap-4 grid-flow-row p-4 sm:p-2 ",
};

//write simple function which return result of 1+1



function Memory() {
  const [props, setProps] = useState<Data[]>(IrregularVerbs);

  const [restartCounter, setRestartCounter] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [cards, setCards] = useState<Item[]>([]);
  const [store, setStore] = useState<number[]>([]);
  const [prev, setPrev] = useState<number>(-1);

  const createData = (english: Data[]) => {
    const RAW = [...english]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    const randomEnglish = RAW.map((item, index) => ({
      select: index,
      eng: item.base,
      check: false,
      click: false,
    })) ;

    const randomCzech = RAW.map((item, index) => ({
      select: index,
      cz: item.cz,
      check: false,
      click: false,
    }));

    setCards([...randomEnglish, ...randomCzech].sort(() => Math.random() - 0.5));

  };

  /* -------------------------------------------------------- */
  /* All answers RIGHT => Restart Field */
  /* ---------------------------- ----------------------------*/
  useEffect(() => {
    // Restart Game
    if (restartCounter == 6) {
      setRestartCounter(0);
     // setProps([...props].sort(() => Math.random() - 0.5));
      createData(props);
      cards.map((card: Item) =>
        setTimeout(() => {
          card.check = false;
          card.click = false;
         // setCards([...cards]);
        }, 1000)
      );
     //setCards([...cards]);

    }
  }, [restartCounter]);


  /* --------------------------------------------------- */
  //       FIRST SETUP
  //       +
  //     Check DATA/WORDS change - MENU    */
  /* --------------------------------------------------- */

  useEffect(() => {
    createData(props);
  }, []);

  /* --------------------------------------------------- */
  /*       Compare Cards          */
  /* --------------------------------------------------- */
  function check(current: number) {
    if (cards[prev].select === cards[current].select) {
      setScore(score + 1);
      setRestartCounter(restartCounter + 1);
      setStore([...store, cards[prev].select]);
      setCards(
        cards.map((item: Item, index: number) => {
          if (index === prev || index === current) {
            return { ...item, check: true, click: true };
          } else {
            cards.map((card: Item) => (card.click = false));
            setCards([...cards]);
            return item;
          }
        })
      );
    }
    setPrev(-1);
  }

  function handleClick(id: number, select: number) {
    cards[id].click = true;
    setCards([...cards]);
    if (prev === -1) {
      setPrev(id);
      return;
    } else {
      cards.map((card: Item) => (card.click = false));
      setCards([...cards]);
      check(id);
    }
  }


  return (
		<section className={styles.section}>
			<div className={styles.section__div}>
				<button
					onClick={() => createData(IrregularVerbs)}
					className={styles.navItem}>
					English
				</button>
				<button
					onClick={() => createData(VerbenData)}
					className={styles.navItem}>
					Deutsch
				</button>
			</div>
			<h2 className={styles.h2}>Score: {score}</h2>

			<div className={styles.article_cover}>
				<article className={styles.article}>
					{cards.map((item: Item, index: number) => {
						return (
							<MemoryCard
								key={index}
								id={index}
								item={item}
								handleClick={handleClick}
							/>
						);
					})}
				</article>
			</div>
		</section>
	);
}

export default Memory;
