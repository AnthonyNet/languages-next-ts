"use client"
import { motion } from "framer-motion";
import {  useState } from "react";
import CardButton from "../card/CardButton";
import { CgClose } from "react-icons/cg";
import {Card_Vocabs} from "../../interface/";

{
  /* 
  
  This Card component is used in OXford B1, B2, C1 & Göethe
    
  */
}

const styles = {
  section : 'flex justify-center items-center w-full h-[90vh] p-2 sm:p-0 responsiveSection',
  section_div: 'w-[600px]  border-4 border-double border-blue-300 rounded-lg shadow-xl shadow-slate-600 preserve-3d group my-rotate-y-180 duration-1000',
  ul: 'card_Ul flex flex-col justify-around w-full text-center p-8 font-semibold italic',
  li: 'p-8 border-b-2 border-slate-300',

  cardBack: "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden bg-white w-full h-full",
cardBack__div: "text-center flex flex-col items-center text-gray-800"
}

const Card = ({ dataTS }:{ dataTS:Card_Vocabs[] }) => {
 
  
  const [data, setData] = useState(dataTS);
  const [rand, setRand] = useState(0);
  const [switchLanguage, setSwitchLanguage] = useState(true);
  const [hidden, setHidden] = useState(true);

  const CardTrue = () => {
   
      return (
        <>
          <li  className={styles.li}>{data[rand].wordTranslated}</li>

          {data[rand].sentenceTranslated?(
            <li className={styles.li} >{data[rand].sentenceTranslated}</li>
          ):null}

          {/* if hidden is true, answers are hidden */}

          <li
              className={hidden?"hidden":`visible flex  ${styles.li}`}
              onClick={() => setHidden(!hidden)}
            >
              <strong className="m-auto mr-auto">
                {data[rand].czWord}
              </strong>
              <div className="-mr-4">
                <CgClose />
              </div>
            </li>
        </>
      );
  };

  const CardFalse = () =>{
    return (
      <>
        <li  className={styles.li}>{data[rand].czWord}</li>

        <li className={hidden?"hidden":`visible flex  ${styles.li}`}
            onClick={() => setHidden(!hidden)}>
            <strong className="m-auto mr-auto">
              {data[rand].wordTranslated}
            </strong>
            <div className="-mr-4">
              <CgClose />
            </div>
          </li>
          {data[rand].sentenceTranslated?(
          <li  className={hidden?"hidden":`visible ${styles.li} flex justify-center`}
          onClick={() => setHidden(!hidden)}
          >{data[rand].sentenceTranslated}</li>
        ):null}
      </>
    );
  }

  const randomWord = () => {
    setRand(Math.floor(Math.random() * data.length));
    setHidden(true);
  };

  return ( 
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className={styles.section + " relative flex items-center justify-center border-2 border-red-300 cursor-pointer group perspective"}
  >
    <motion.div
      className={styles.section_div }
      animate={{ rotateY: 180 }}>
     
     <li className="btn_Li flex justify-around text-center mt-8">
          <CardButton onClick={randomWord} text={"Next word"} />

          <CardButton
            onClick={() => [setSwitchLanguage(!switchLanguage), setHidden(true)]}
            text={switchLanguage ? "CZ ➜ ENG" : "ENG ➜ CZ"}
          />
        </li>
  
      <motion.div className="styles.cardback">
      <div className={styles.cardBack__div}>
            <h1 className="text-4xl">Back</h1>
      </div>
      </motion.div>

      
   
 
   </motion.div>

  </motion.section>
  );
};

export default Card;
