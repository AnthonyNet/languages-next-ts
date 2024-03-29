import "@/styles/MainPage.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Irregular from "@/myData/images/irregular.gif";
import Memory from "@/myData/images/memory-x.gif";
import Search from "@/myData/images/search.gif";
import Pagination from "@/myData/images/pagination.gif";

const styles = {
	section:
		"bg-transparent min-h-[90vh] h-auto xl:h-90-dvh pt-4  flex flex-col xl:flex-row items-center justify-center ",
	div_left:
		"h-screen max-w-4xl mx-auto text-center flex flex-col justify-center text- gap-4 px-8 xl:p-0 ",
	div_right:
		"w-full h-auto  min-h-[800px] xl:min-h-[85vh] xl:h-[80%] max-w-xl mx-auto rounded-lg shadow-lg py-8 sm:py-0  __my_grid sm:mt-[10vh]",
	image_cover: "relative __background __my_grid_item rounded-[30px]",
	image:
		"border-4 border-double rounded-[30px] border-blue-700 hover:scale-[102%] transition-all duration-500 ease-in-out",
};

export default function Section2() {
	return (
		<div className={styles.section} id="section-2">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="h-screen sm:h-full"
				transition={{
					delay: 1,
					duration: 3,
					ease: "easeOut",
				}}>
				<div className={styles.div_left}>
					<h2 className="text-4xl font-bold">Welcome to Learning languages</h2>
					<p className="mt-4 text-xl">
						Welcome to our Learn Languages app, your gateway to mastering
						English and German for FREE!
					</p>
					<p className="mt-4">
						Immerse yourself in a world of language learning, where interactive
						lessons, engaging exercises, and real-life scenarios await you...
					</p>
				</div>
			</motion.div>
			<div className={styles.div_right}>
				<div
					className={
						styles.image_cover +
						" sm:row-span-6 sm:col-span-6 sm:row-start-4 sm:row-end-10 sm:col-start-7 sm:col-end-13 sm:z-30  overflow-hidden hover:scale-[102%] transition-all duration-500 ease-in-out"
					}>
					<Image
						src={Irregular}
						alt="irregular-gif"
						fill={true}
						className={
							"border-4 border-double rounded-[30px] border-blue-700  transition-all duration-500 ease-in-out scale-y-[115%] scale-x-[118%] pr-1 h-20"
						}
					/>
				</div>
				<div
					className={
						styles.image_cover +
						" row-start-3 row-end-7 col-start-1 col-end-9  z-20"
					}>
					<Image
						src={Memory}
						alt="memory-gif"
						fill={true}
						className={styles.image + " rounded-[30px] p-2"}
					/>
				</div>
				<div
					className={
						styles.image_cover +
						" row-span-5  row-start-7 row-end-13 col-start-1 col-end-12  z-10 sm:mt-[5vh]"
					}>
					<Image
						src={Pagination}
						alt="pagination-gif"
						fill={true}
						className={styles.image + " sm:rounded-bl-[120px]"}
					/>
				</div>
				<div
					className={
						styles.image_cover +
						" row-span-4 row-start-1 row-end-5 col-start-5 col-end-13  sm:rounded-br-[500px] sm:mr-8"
					}>
					<Image
						src={Search}
						alt="irregular-gif"
						fill={true}
						className={styles.image + " sm:rounded-tr-[120px]"}
					/>
				</div>
			</div>
		</div>
	);
}
