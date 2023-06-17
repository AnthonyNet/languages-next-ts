"use client";
import Link from "next/link";

import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";

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
	main__icon: "transition duration-700 ease-in-out mr-2",
	main__icon__open: "rotate-90 transition duration-700 ease-in-out mr-2",
	main__h3: "text-xl mb-2",
	main__ul: "cursor-pointer transition duration-700 ease-in-out",
	main__ul__open:
		" cursor-pointer transition duration-700 ease-in-out text-sky-400 ulAnimation",
	main__ul__li: "flex flex-row items-center cursor-pointer",
	main__ul__li__open: "transition ease-in-out duration-700 ml-[30px]",
};

interface Mobile {
	nav: boolean;
	handleNav: () => void;
}

function Mobile__Nav({ nav, handleNav }: Mobile) {
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

	return (
		<div
			className={
				nav
					? "snap-x z-10  fixed left-0 top-0 w-full h-screen bg-black/70"
					: "z-0"
			}>
			<div
				className={
					nav
						? "responsiveMenu fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen mobile__Nav p-4 sm:p-8 ease-in duration-500"
						: "fixed top-10 left-[-100%] ease-in duration-500"
				}
				/* style={darkMode? stylesSwitch.dark.responsiveMenu: null}*/
			>
				<div className="flex justify-between items-center">
					<aside className="logo sm:mr-40">
						<Link href="/">
							Learn <strong>languages</strong>
						</Link>
					</aside>
					<div
						onClick={handleNav}
						className="navClose rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
						<CgClose />
					</div>
				</div>
				<div className="mottoCover border-b border-gray-300 my-4 text-sm sm:text-lg">
					<p>Evolution means everyday learning</p>
				</div>
				<nav>
					<ul className="flex flex-col z-20">
						<div className="flex justify-between items-center">
							<Link className={styles.main__h3} href="/" onClick={handleNav}>
								Home
							</Link>
							<span className="bottom-2 right-4 text-3xl">
								<DarkModeBtn />
							</span>
						</div>

						<main>
							<div className="flex flex-row">
								<span
									className={
										!english ? styles.main__icon : styles.main__icon__open
									}>
									➤
								</span>
								<h3 onClick={handleEnglish} className={styles.main__h3}>
									English
								</h3>
							</div>
							<ul className={english ? styles.main__ul__open : styles.main__ul}>
								{english && (
									<>
										<li
											onClick={handleNav}
											className={
												!english
													? styles.main__ul__li
													: styles.main__ul__li__open
											}>
											<Link href="/english/irregular-verbs">{`Irregular verbs (${IrregularVerbs.length})`}</Link>
										</li>
										<li onClick={handleNav}
											className={
												english
													? styles.main__ul__li__open
													: styles.main__ul__li
											}>
											<Link href="/german/memory">Memory</Link>
										</li>
										<li onClick={handleNav}
											className={
												english
													? styles.main__ul__li__open
													: styles.main__ul__li
											}>
											<Link href="/english/search-irregular">{`Irregular list (${IrregularVerbs.length})`}</Link>
										</li>
										<li onClick={handleNav}
											className={
												english
													? styles.main__ul__li__open
													: styles.main__ul__li
											}>
											<Link href="/english/oxford-B1">{`Oxford B1 (${OxfordB1.length})`}</Link>
										</li>
										<li onClick={handleNav}
											className={
												english
													? styles.main__ul__li__open
													: styles.main__ul__li
											}>
											<Link href="/english/oxford-B2">{`Oxford B2 (${OxfordB2.length})`}</Link>
										</li>
										<li onClick={handleNav}
											className={
												english
													? styles.main__ul__li__open
													: styles.main__ul__li
											}>
											<Link href="/english/oxford-C1">{`Oxford C1 (${OxfordC1.length})`}</Link>
										</li>
										<li onClick={handleNav}
											className={
												english
													? styles.main__ul__li__open
													: styles.main__ul__li
											}>
											<Link href="/english/phrasal-verbs">{`Lukes Phrasal (${LukesPhrasal.length})`}</Link>
										</li>
										<li onClick={handleNav}
											className={
												english
													? styles.main__ul__li__open
													: styles.main__ul__li
											}>
											<Link href="/english/pagination">Pagination</Link>
										</li>
									</>
								)}
							</ul>
							<div className="flex flex-row">
								<span
									className={
										!german ? styles.main__icon : styles.main__icon__open
									}>
									➤
								</span>
								<h3 onClick={handleGerman} className={styles.main__h3}>
									German
								</h3>
							</div>
							<ul className={german ? styles.main__ul__open : styles.main__ul}>
								{german && (
									<>
										<li onClick={handleNav}
											className={
												german ? styles.main__ul__li__open : styles.main__ul__li
											}>
											<Link href="/german/irregular-verbs">{`Unregelmäßige Verben (${VerbenData.length})`}</Link>
										</li>
										<li onClick={handleNav}
											className={
												german ? styles.main__ul__li__open : styles.main__ul__li
											}>
											<Link href="/german/memory">Memory</Link>
										</li>
										<li onClick={handleNav}
											className={
												german ? styles.main__ul__li__open : styles.main__ul__li
											}>
											<Link href="/german/goethe">{`Goethe (${Goethe.length})`}</Link>
										</li>
									</>
								)}
							</ul>
						</main>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Mobile__Nav;
