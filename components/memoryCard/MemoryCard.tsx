"use client";
import { motion } from "framer-motion";
interface Card {
  id: number;
  item: {select:number, check:boolean, cz?:string, eng?:string, click: boolean} ;
  handleClick: (id: number, select: number) => void;
}

const styles = {
	container:
		"relative flex items-center justify-center  cursor-pointer group perspective transition ease-in-out duration-500 __border_color __border_hover",
	cover: "preserve-3d group my-rotate-y-180 w-full h-full ",
	cover__div: "w-full h-full flex items-center justify-center",
	cardBack:
		"absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden rounded-3xl w-full h-full bg-black ",
	cardBack__div: "w-full h-full flex flex-col items-center justify-center",
	h2: "text-base font-bold md:text-xl xl:text-3xl p-2 sm:p-0",
	h3: "text-4xl xl:text-6xl",
} as const;

function Memory({ id, item, handleClick }: Card) {
const fadeOut = item.check && "opacity-0 transition-opacity duration-1000 delay-1000 ease-in-out";

  return (
		<motion.button
			className={
				styles.container +
				" " +
				(item.click
					? "border-2 rounded-3xl p-4  __memory_border_green"
					: "p-4 border-2 rounded-3xl __border_color") +
				" " +
				fadeOut
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