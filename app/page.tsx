"use client";

import "../styles/MainPage.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import CloudDown from '../components/icons/CloudDown';

const styles = {
	section:
		"responsiveSection flex flex-col justify-center items-center mt-[10vh]  h-90-dvh",
	card__div:
		"cursor-pointer __gradient __text_shadow rounded-tl-3xl rounded-br-3xl -skew-x-12 pr-2",
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
					className={styles.card__div}>
					<h1 className="text-[10vw] xl:text-[120px] leading-[160px]">
						Learn <strong>languages</strong>
					</h1>
				</motion.div>
				<h2 className="p-4">Working in progress...</h2>
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
				<div className="w-[100px] h-[100px] mt-8 flex justify-center items-center motion-safe:animate-ping-slower ">
					<a href="/">
						<CloudDown />
					</a>
				</div>
			</section>
		{/*}
			<section id="section-2" className="bg-violet-500 relative">

			</section>
			<section id="section-3" className="bg-green-500 relative">
				<Image
					fill={true}
					src={Gif}
					style={{ objectFit: "contain" }}
					alt="gif"></Image>
			</section>
				*/}
		</>
	);
}

export default MainPage;
