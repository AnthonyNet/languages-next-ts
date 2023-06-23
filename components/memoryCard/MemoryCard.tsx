"use client";
import { motion } from "framer-motion";
interface Card {
  id: number;
  item: {select:number, check:boolean, cz?:string, eng?:string, click: boolean} ;
  handleClick: (id: number, select: number) => void;
}

const styles = {
	container:
		"relative flex items-center justify-center border-2  cursor-pointer group perspective",
	cover: "preserve-3d group my-rotate-y-180 w-full h-full",
	cover__div: "w-full h-full flex items-center justify-center",
	cardBack:
		"absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden bg-blue-950  w-full h-full ",
	cardBack__div:
		"w-full h-full flex flex-col items-center justify-center text-gray-800",
	h2: "text-base md:text-xl xl:text-2xl p-2 sm:p-0",
	h3: "text-4xl xl:text-6xl",
} as const;

function Memory({ id, item, handleClick }: Card) {

  return (
		<motion.button
			className={
				styles.container +
				" " +
				(item.click
					? "ring-8 ring-green-400 border-transparent"
					: "ring-8 border-indigo-600 ")
			}
			onClick={() => handleClick(id, item.select)}
			disabled={item.click}>
			<motion.div
				className={styles.cover}
				animate={{ rotateY: item.check ? 180 : 0 }}
				transition={{ duration: 1 }}>
				<motion.div className={styles.cover__div}>
					<h2 className={styles.h2}>{item.cz ? item.cz : item.eng}</h2>
				</motion.div>
				<motion.div className={styles.cardBack}>
					<div className={styles.cardBack__div}>
						<h3 className={styles.h3}>👍</h3>
					</div>
				</motion.div>
			</motion.div>
		</motion.button>
	);
}

export default Memory;
