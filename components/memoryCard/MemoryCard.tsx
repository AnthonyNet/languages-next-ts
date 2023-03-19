"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Card {
  id: number;
  item: {select: number, eng?: string, cz?:string, check: boolean}
  handleClick: (id:number) => void;

}

const styles = {
  
  button:
    "relative flex items-center justify-center border-2 border-red-300 cursor-pointer group perspective",
    button__div:
    "preserve-3d group my-rotate-y-180 w-full h-full duration-1000",
 /* button__div:
    "preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000",*/
  button__div__div: "w-full h-full flex items-center justify-center",
  cardBack:
    "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden bg-white w-full h-full",
 cardBack__div: "w-full h-full flex flex-col items-center justify-center text-gray-800",
 border: "border-2 border-green-300",
} as const;

function Memory({id, item, handleClick}: Card) {
const [checkClick, setCheckClick] = useState<boolean>(false)
//console.log(item);


  return <>
    <motion.button
      className={styles.button}
      onClick={()=>handleClick(id, item.select)}
     // disabled={checkClick}
    >
      <motion.div
        className={styles.button__div + " " + styles.border}
       animate={{ rotateY:item.check ? 180 : 0 }}
      >
        <motion.div className={styles.button__div__div}>
         
            <h2 className="text-4xl">{item.cz?item.cz:item.eng}</h2>
        
        </motion.div>
        <motion.div className={styles.cardBack}>
          <div className={styles.cardBack__div}>
            <h1 className="text-4xl sm:text-8xl">👍</h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.button>

  </>
}

export default Memory;