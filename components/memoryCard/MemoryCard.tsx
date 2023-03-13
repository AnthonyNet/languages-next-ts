import { motion } from "framer-motion";

const styles = {
  
  card__div:
    "relative flex items-center justify-center border-2 border-red-300 bg-transparent cursor-pointer group perspective",
  card__div__div:
    "preserve-3d group-hover:my-rotate-y-180 w-full h-full  bg-blue-200 duration-1000",
  card__div__div__div: "w-full h-full",
  cardBack:
    "absolute my-rotate-y-180 backface-hidden mt-[-68%] overflow-hidden bg-white w-full h-full",
 
} as const;

function Memory() {
  return (
    <div className={styles.card__div}>
      <div className={styles.card__div__div}>
        <div className={styles.card__div__div__div}>
         
        </div>

        <div className={styles.cardBack}>
          <div className="w-full h-full flex justify-center items-center">

          <h2 className="text-3xl font-semibold self-center">
             Back
            </h2>
          </div>
         
         
        </div>
      </div>
    </div>
  );
}

export default Memory;
