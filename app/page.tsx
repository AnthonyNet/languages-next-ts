"use client";

import "../styles/MainPage.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import CloudDown from "../components/icons/CloudDown";
import Image from "next/image";
import Irregular from "../myData/images/irregular.gif";
import Memory from "../myData/images/memory-x.gif";
import Search from "../myData/images/search.gif";
import Pagination from "../myData/images/pagination.gif";

const urls = ["/myData/images/1.jpg"];

const styles = {
	section:
		"responsiveSection grid grid-rows-6  items-center justify-center mt-[10vh]  h-90-dvh",
	h1__cover:
		"row-start-2 row-end-5 cursor-pointer __gradient __text_shadow rounded-tl-3xl rounded-br-3xl -skew-x-12 pr-2",
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

			<section
				className="bg-black h-screen flex items-center justify-center"
				id="section-2">
				<div className=" w-full h-[80%] max-w-xl mx-auto rounded-lg shadow-lg  __my_grid mt-[20vh]">
					<div className="relative row-span-5 row-start-4 row-end-9 col-start-7 col-end-13 z-30 border-4 border-double overflow-hidden rounded-[30px] __border_color">
						<Image
							src={Irregular}
							alt="irregular-gif"
							fill={true}
							className="scale-[117%] scale-x-[120%] pr-1"
						/>
					</div>
					<div className=" row-start-3 row-end-7 col-start-1 col-end-9 relative bg-black z-20 border-4 border-double rounded-[30px] __border_color">
						<Image
							src={Memory}
							alt="irregular-gif"
							fill={true}
							className="rounded-[30px] p-2"
						/>
					</div>
					<div className="row-span-5 row-start-7 row-end-12 col-start-2 col-end-11  z-10 relative border-4 border-double rounded-[30px] __border_color m-8">
						<Image
							src={Pagination}
							alt="irregular-gif"
							fill={true}
							className="rounded-[30px]"
						/>
					</div>
					<div className="row-span-4 row-start-1 row-end-5 col-start-5 col-end-13 relative border-4 border-double rounded-[30px] rounded-br-[70px]  __border_color">
						<Image
							src={Search}
							alt="irregular-gif"
							fill={true}
							className="rounded-[30px] pl-2"
						/>
					</div>
				</div>
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">
						Welcome to Our Website
					</h1>
					<p className="mt-4 text-xl text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</section>
		</>
	);
}

export default MainPage;
