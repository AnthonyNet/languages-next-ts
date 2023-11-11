"use client";

import "../styles/MainPage.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import CloudDown from "../components/icons/CloudDown";
import Section2 from "../sections/Section2_Index";
import Flying_objects from "@/components/home/Flying-objects";

const styles = {
	section:
		"responsiveSection grid grid-rows-6  items-center justify-center  h-100-dvh",
	h1__cover:
		"max-h-[100px] flex items-center justify-center sm:max-h-[500px] row-start-3 row-end-5 cursor-pointer __gradient __text_shadow rounded-tl-3xl rounded-br-3xl -skew-x-12  __css_h1cover_height rounded-tr-xl",
	h1: "text-[10vw] xl:text-[120px] leading-[160px] text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-sky-900 block invert",
	bottom__container:
		"row-start-5 row-end-7 justify-center items-center  text-center __css_size",
	icon__cover:
		" grid justify-center items-center motion-safe:animate-ping-slower md:mt-4",
} as const;

function MainPage() {
	return (
		<>
			<section className={styles.section}>
				<Flying_objects />

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
						ease: "easeOut",
					}}
					className={styles.h1__cover}>
					<div className="relative overflow-hidden ">
						<h1 className="text-[10vw] xl:text-[120px] leading-[160px] transform  font-bold relative text-transparent  bg-clip-text">
							<span className="text-blue-700">Learn</span>{" "}
							<strong className="text-blue-300 bg-gradient-to-r from-blue-400 to-blue-800 pr-2 rounded-br-3xl">
								languages
							</strong>
						</h1>
					</div>
				</motion.div>
				<div className={styles.bottom__container}>
					<h2>Working in progress...</h2>
					<Typewriter
						options={{
							strings: [
								"React",
								"Next.js",
								"Tailwind CSS",
								"TypeScript",
								"HTML5",
								"CSS3",
							],
							autoStart: true,
							loop: true,
						}}
					/>
					<div className={styles.icon__cover}>
						<a href="#section-2">
							<CloudDown />
						</a>
					</div>
				</div>
			</section>

			<Section2 />
		</>
	);
}

export default MainPage;
