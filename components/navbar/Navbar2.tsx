"use client";

import { useState } from "react";
import Link from "next/link";

import { TiThMenu } from "react-icons/ti";
import Mobile__Nav from "./Mobile__Nav";

import {
  IrregularVerbs,
  OxfordB1,
  OxfordB2,
  OxfordC1,
  LukesPhrasal,
  VerbenData,
  Goethe,
} from "../../myData";

import DarkModeBtn from "./DarkModeBtn";
const styles = {
	nav: "flex justify-center items-center w-full  min-h-[10vh] shadow-xl z-[400] px-4 fixed",
	nav__div: "navDetails w-full h-full flex items-start   relative text-xl",
	aside: "logo sm:w-1/3 ",
	article: "justify-around items-start w-full h-full hidden md:flex",
	container:
		"relative inline-block tooltip",
	cover:
		"flex flex-col p-4 bg-white w-60 h-auto rounded-md z-20 absolute right-0 invisible tooltip-item border-2 navCover",
	ul: "list-disc space-y-2",
	ul__li: "flex items-start",
	ul__li__a: "font-medium text-sm text-gray-500 hover:text-black",
} as const;

function Navbar(){
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
		<nav
			className={styles.nav}
			/* style={darkMode ? stylesSwitch.dark.basic : stylesSwitch.light.basic}*/
		>
			<div className={styles.nav__div}>
				<aside className={styles.aside}>
					<Link href="/">
						Learn <strong>languages</strong>
					</Link>
				</aside>
				<article className={styles.article}>
					<Link href="/">Home</Link>

					<div className={styles.container}>
						<a
							href="#"
							className="transition ease-in-out duration-700 px-2 py-1 font-medium transform hover:-translate-y-6">
							English
						</a>
						<div className={styles.cover}>
							<ul className={styles.ul}>
								<li className={styles.ul__li}>
									<Link
										href="/english/irregular-verbs"
										className={styles.ul__li__a}>
										{" "}
										{`Irregular Verbs (${IrregularVerbs.length})`}{" "}
									</Link>
								</li>
								<li className={styles.ul__li}>
									<Link href="/german/memory" className={styles.ul__li__a}>
										Memory
									</Link>
								</li>
								<li className={styles.ul__li}>
									<Link
										href="/english/search-irregular"
										className={
											styles.ul__li__a
										}>{`Irregular List (${IrregularVerbs.length})`}</Link>
								</li>
								<li className={styles.ul__li}>
									<Link
										href="/english/oxford-B1"
										className={
											styles.ul__li__a
										}>{`Oxford B1 (${OxfordB1.length})`}</Link>
								</li>
								<li className={styles.ul__li}>
									<Link
										href="/english/oxford-B2"
										className={
											styles.ul__li__a
										}>{`Oxford B2 (${OxfordB2.length})`}</Link>
								</li>
								<li className={styles.ul__li}>
									<Link
										href="/english/oxford-C1"
										className={
											styles.ul__li__a
										}>{`Oxford C1 (${OxfordC1.length})`}</Link>
								</li>
								<li className={styles.ul__li}>
									<Link
										href="/english/phrasal-verbs"
										className={
											styles.ul__li__a
										}>{`Lukes Phrasal (${LukesPhrasal.length})`}</Link>
								</li>
								<li className={styles.ul__li}>
									<Link href="/english/pagination" className={styles.ul__li__a}>
										Pagination
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className={styles.container}>
						<a
							href="#"
							className="transition ease-in-out duration-700 px-2 py-1 font-medium transform hover:-translate-y-6">
							German
						</a>

						<div className={styles.cover}>
							<ul className={styles.ul}>
								<li className={styles.ul__li}>
									<Link
										href="/german/irregular-verbs"
										className={styles.ul__li__a}>
										{" "}
										{`Unregelmäßige Verben (${VerbenData.length})`}{" "}
									</Link>
								</li>
								<li className={styles.ul__li}>
									<Link href="/german/memory" className={styles.ul__li__a}>
										{" "}
										Memory{" "}
									</Link>
								</li>
								<li className={styles.ul__li}>
									<Link href="/german/goethe" className={styles.ul__li__a}>
										{" "}
										{`Goethe (${Goethe.length})`}{" "}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</article>

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
};

export default Navbar;
