"use client";

import { useState } from "react";
import Link from "next/link";

import { TiThMenu } from "react-icons/ti";
import Mobile__Nav from "./Mobile__Nav";
import Nav_Items from "./Nav_Items";
import DarkModeBtn from "./DarkModeBtn";
import '../../styles/Navbar.css';


const styles = {
	nav: "flex justify-center items-center w-full  min-h-[10vh] shadow-xl z-[400] px-4 fixed max-w-[1280px]",
	nav__div:
		"w-full h-full flex items-start relative md:text-xl xl:text-3xl ",
	aside:
		"logo w-auto md:w-[35vw] lg:w-1/3 transition ease-in-out duration-1000 __nav-item",
	article: "justify-around items-start w-full h-full hidden md:flex ",
	container:
		"relative inline-block tooltip hover:text-white transition ease-in-out duration-700 font-extrabold",
	main__a:
		"transition ease-in-out duration-700 px-2 py-1 font-medium transform hover:-translate-y-6 ", //ulAnimation
	cover:
		"flex flex-col p-4 bg-white w-60 h-auto rounded-md z-20 absolute right-0 invisible tooltip-item ",
	ul: "list-disc space-y-2 ",
	ul__li: "flex items-start",
	ul__li__a:
		"font-bold text-sm text-gray-500 hover:text-sky-600 transition duration-700 ease-in-out transform",
} as const;


function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.nav__div}>
				<aside className={styles.aside}>
					<Link
						href="/"
						className=" rounded-tl-xl rounded-br-xl  pr-2 ">
						Learn <strong>languages</strong>
					</Link>
				</aside>
				<Nav_Items />

				<span className="hidden md:flex  bottom-2 right-4 text-3xl">
					<DarkModeBtn />
				</span>

				<div className="text-4xl md:hidden ml-auto">
					<TiThMenu onClick={handleNav} />
				</div>
			</div>
			<Mobile__Nav nav={nav} handleNav={handleNav} />
		</nav>
	);
}

export default Navbar;
