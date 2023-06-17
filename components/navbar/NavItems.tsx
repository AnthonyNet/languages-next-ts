"use client";

import Link from "next/link";
import { menuData } from "./dataNav";

const styles = {
	nav: "flex justify-center items-center w-full  min-h-[10vh] shadow-xl z-[400] px-4 fixed",
	nav__div: "navDetails w-full h-full flex items-start   relative text-xl",
	aside: "logo sm:w-1/3 ",
	article: "justify-around items-start w-full h-full hidden md:flex",
	container:
		"relative inline-block tooltip hover:text-white transition ease-in-out duration-700",
	main__a:
		"transition ease-in-out duration-500 px-2 py-1 font-medium", //ulAnimation
	cover:
		"flex flex-col p-4 bg-white w-60 h-auto rounded-md z-20 absolute right-0 invisible tooltip-item border-2 navCover",
	ul: "list-disc space-y-2 style-",
	//ul__li: "flex items-start",
	ul__li__a:
		"flex items-start font-bold text-sm text-gray-500 hover:text-sky-600 transition duration-700 ease-in-out transform",
} as const;

	interface menuItems {
		href: string;
		name: string;
		length?: number;
	}

function NavItems() {

		const menuItems = (items:menuItems[]) =>{
		return (
			items.map((item, index) => {
				return (
					<li key={index}

					className={styles.ul__li__a}>
					<Link href={item.href}>{item.name} {item.length&&`(${item.length})`}</Link>
					</li>
		)
	  })
	)}

	return (
		<article className={styles.article}>
			<Link href="/" className="hover:text-white transition ease-in-out duration-500">
				Home
			</Link>

			<div className={styles.container}>
				<a href="#" className={styles.main__a}>
					English
				</a>
				<div className={styles.cover}>
					<ul className={styles.ul}>{menuItems(menuData.english)}</ul>
				</div>
			</div>

			<div className={styles.container}>
				<a href="#" className={styles.main__a}>
					German
				</a>

				<div className={styles.cover}>
					<ul className={styles.ul}>{menuItems(menuData.german)}</ul>
				</div>
			</div>
		</article>
	);


}

export default NavItems;
