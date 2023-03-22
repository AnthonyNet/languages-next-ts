"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CardButton from "../card/CardButton";

import { Card_Vocabs } from "../../interface/";

{
  /* 
  
  This Card component is used in OXford B1, B2, C1 & Göethe
    
  */
}

const styles = {
  section:
    "relative flex justify-center items-center w-full h-[90vh] p-2 sm:p-0 responsiveSection",
  section__div:
    "w-full sm:w-[600px] h-[250px] sm:h-[270px] md:h-[320px] border-double border-4 border-blue-300  rounded-lg shadow-xl shadow-slate-600 preserve-3d group my-rotate-y-180 duration-1000 flex flex-col justify-around",
    article: "w-full flex flex-col justify-center sm:grow",
  section__div__btnCover: "flex justify-around text-center p-2 sm:p-4 border-t-2 border-blue-400",
  h3: "py-2 md:py-4  text-center",

  cardBack:
    "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden w-full h-full mainCardBack",
  cardBack__div:
    "h-full text-center flex flex-col items-center text-gray-600 ",
    cardBack__answersCover: "w-full h-full flex flex-col justify-center md:p-4",
  cardBack__btnCover: "w-full flex justify-around p-2 md:p-4  border-t-2 border-blue-400",  
};

const Card = ({ dataTS }: { dataTS: Card_Vocabs[] }) => {
 

  const [rand, setRand] = useState<number>(0);
  const [data, setData] = useState(dataTS[0]);

  const { czWord, wordTranslated, sentenceTranslated } = data;

  const [switchSide, setSwitchSide] = useState<boolean>(true);
  const [switchLanguage, setSwitchLanguage] = useState<boolean>(true);
 

  const randomWord = () => {
    setRand(Math.floor(Math.random() * dataTS.length));
   
  };

 /* useEffect(() => {
    setData2(data[rand]);
  }, [rand]);*/

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.section}
    >
      <motion.div
        className={styles.section__div}
        animate={{ rotateY: switchSide ? 0 : 180 }}
      >
        <article className={styles.article}>
          {switchLanguage ? (
            sentenceTranslated ? (
              <div>
                <h3 className={styles.h3}>{sentenceTranslated}</h3>
                <h3 className={styles.h3}>{wordTranslated}</h3>
              </div>
            ) : (
              <h3 className={styles.h3}>{wordTranslated}</h3>
            )
          ) : (
            <h3 className={styles.h3}>{czWord}</h3>
          )}
        </article>

        <div className={styles.section__div__btnCover}>
          <CardButton
            onClick={() => [setSwitchLanguage(!switchLanguage)]}
            text={switchLanguage ? "CZ" : "EN"}
          />

          <CardButton onClick={randomWord} text={"Next word"} />

          <CardButton
            onClick={() => [setSwitchSide(!switchSide)]}
            text={"Answer"}
          />
        </div>

        <motion.div className={styles.cardBack}>
          <div className={styles.cardBack__div}>
            {switchLanguage ? (
              sentenceTranslated ? (
                <div className={styles.cardBack__answersCover}>
                  <h3 className={styles.h3}>{sentenceTranslated}</h3>
                  <h3 className={styles.h3}>{wordTranslated}</h3>
                  <h3 className={styles.h3}>{czWord}</h3>
                </div>
              ) : (
                 <div className={styles.cardBack__answersCover}>
                  <h3 className={styles.h3}>{wordTranslated}</h3>
                  <h3 className={styles.h3}>{czWord}</h3>
                </div>
              )
            ) : sentenceTranslated ? (
               <div className={styles.cardBack__answersCover}>
                <h3 className={styles.h3}>{czWord}</h3>
                <h3 className={styles.h3}>{sentenceTranslated}</h3>
                <h3 className={styles.h3}>{wordTranslated}</h3>
              </div>
            ) : (
               <div className={styles.cardBack__answersCover}>
                <h3 className={styles.h3}>{czWord}</h3>
                <h3 className={styles.h3}>{wordTranslated}</h3>
              </div>
            )}

            <div className={styles.cardBack__btnCover}>
              <CardButton
                onClick={() => [setSwitchLanguage(!switchLanguage)]}
                text={switchLanguage ? "CZ" : "EN"}
              />

              <CardButton
                onClick={() => [setSwitchSide(!switchSide)]}
                text={"Question"}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Card;
