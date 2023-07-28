"use client";

import "../styles/MainPage.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import CloudDown from "../components/icons/CloudDown";
import Section2 from "../sections/Section2_Index";

const styles = {
	section:
		"responsiveSection grid grid-rows-6  items-center justify-center  h-100-dvh",
	h1__cover:
		"max-h-[100px] flex items-center sm:max-h-[500px] row-start-3 row-end-5 cursor-pointer __gradient __text_shadow rounded-tl-3xl rounded-br-3xl -skew-x-12 pr-2 __css_height",
	h1: "text-[10vw] xl:text-[120px] leading-[160px]",
	bottom__container:
		"row-start-5 row-end-7 justify-center items-center  text-center",
	icon__cover:
		" grid justify-center items-center motion-safe:animate-ping-slower mt-4 ",
} as const;

function MainPage() {
	return (
		<>
			<section className={styles.section}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
						ease: "easeOut",
					}}
					className={styles.h1__cover}>
					<h1 className={styles.h1}>
						Learn <strong>languages</strong>
					</h1>
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
