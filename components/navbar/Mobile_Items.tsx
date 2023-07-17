import React from 'react';
import Link from 'next/link';
import DarkModeBtn from "./DarkModeBtn";
import {useState } from 'react';
import {menuData} from './dataNav';
import {
	IrregularVerbs,
	OxfordB1,
	OxfordB2,
	OxfordC1,
	LukesPhrasal,
	VerbenData,
	Goethe,
} from "../../myData";

const styles = {
	main: "flex flex-col z-20",
	main__div: "flex justify-between items-center",
	main__div__span: "bottom-2 right-4 text-3xl",
	main__link: "text-2xl font-bold cursor-pointer",

	section: {
		div: "flex flex-row",
		div__div: "mottoCover border-b border-gray-300 my-4 text-sm sm:text-lg",
		icon: "transition duration-700 ease-in-out mr-2",
		icon__open: "rotate-90 transition duration-700 ease-in-out mr-2",
		h3: "text-xl mb-2 cursor-pointer",
		ul__open:
			"cursor-pointer transition  duration-100 ease-in-out font-bold ulAnimation",
		ul__li__open: "transition ease-in-out duration-700 ml-[30px]",
	},
} as const;


type Mobile = {
	handleNav: () => void;
}

const Mobile_UL = ({ handleNav }: Mobile) => {
	const [english, setEnglish] = useState(false);
	const [german, setGerman] = useState(false);

	function handleEnglish() {
		setGerman(false);
		setEnglish(!english);
	}

	function handleGerman() {
		setEnglish(false);
		setGerman(!german);
	}

	interface menuItems {
		href: string;
		name: string;
		length?: number;
	}

	const menuItems = (items:menuItems[]) =>{
		return (
			items.map((item, index) => {
				return (
					<li key={index}
					onClick={handleNav}
					className={styles.section.ul__li__open}>
					<Link href={item.href}>{item.name} {item.length&&`(${item.length})`}</Link>
					</li>
		)
	  })
	)}

	return (
		<main className={styles.main}>
			<div className={styles.main__div}>
				<Link className={styles.main__link} href="/" onClick={handleNav}>
					Home
				</Link>
				<span className={styles.main__div__span}>
					<DarkModeBtn />
				</span>
			</div>

			<section>
				<div className={styles.section.div}>
					<span
						className={!english ? styles.section.icon : styles.section.icon__open}>
						➤
					</span>
					<h3 onClick={handleEnglish} className={styles.section.h3}>
						English
					</h3>
				</div>
				<ul className={english ? styles.section.ul__open : " text-transparent"}>
					{english && menuItems(menuData.english)}
				</ul>
				<div className={styles.section.div}>
					<span
						className={!german ? styles.section.icon : styles.section.icon__open}>
						➤
					</span>
					<h3 onClick={handleGerman} className={styles.section.h3}>
						German
					</h3>
				</div>
				<ul className={german ? styles.section.ul__open : " text-transparent "}>
					{german && menuItems(menuData.german) }
				</ul>
			</section>
		</main>
	);
};

export default Mobile_UL