"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CardButton from "../card/CardButton";
import { CgClose } from "react-icons/cg";
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
    "max-w-[600px] min-h-[40dvh] border-double border-4 border-blue-300  rounded-lg shadow-xl shadow-slate-600 preserve-3d group my-rotate-y-180 duration-1000 flex flex-col justify-around",
  section__div__btnCover: "flex justify-around text-center p-4",
  h3: "p-4 border-b-4 text-center",

  cardBack:
    "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden bg-white w-full h-full",
  cardBack__div:
    "h-full text-center flex flex-col items-center text-gray-800 bg-white flex flex-col justify-between",
};

const Card = ({ dataTS }: { dataTS: Card_Vocabs[] }) => {
  const [data, setData] = useState(dataTS);

  const [rand, setRand] = useState(0);
  const [data2, setData2] = useState(dataTS[0]);

  const { czWord, wordTranslated, sentenceTranslated } = data2;

  const [switchSide, setSwitchSide] = useState(true);
  const [switchLanguage, setSwitchLanguage] = useState(true);
  const [hidden, setHidden] = useState(true);

  const randomWord = () => {
    setRand(Math.floor(Math.random() * data.length));
    setHidden(true);
  };



  useEffect(() => {
    setData2(data[rand]);
  }, [rand]);

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
            <div>
              <h3 className={styles.h3}>{sentenceTranslated}</h3>
              <h3 className={styles.h3}>{wordTranslated}</h3>
              <h3 className={styles.h3}>{czWord}</h3>
            </div>
          ): (<div>
              <h3 className={styles.h3}>{wordTranslated}</h3>
              <h3 className={styles.h3}>{czWord}</h3>
            </div>
)
        ):  sentenceTranslated ? (
          <div>
            <h3 className={styles.h3}>{czWord}</h3>
            <h3 className={styles.h3}>{sentenceTranslated}</h3>
            <h3 className={styles.h3}>{wordTranslated}</h3>
          
          </div>
        ): (
          <div>
               <h3 className={styles.h3}>{czWord}</h3>
               <h3 className={styles.h3}>{wordTranslated}</h3>
          </div>
        )
        
        }
          

           <div className={styles.section__div__btnCover}>
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
