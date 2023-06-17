"use client";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import Mobile_UL from "./Mobile_UL";

const styles = {
	main__open: "snap-x z-10  fixed left-0 top-0 w-full h-screen bg-black/70",
	main__close: "z-0",
	main__div__open:
		"responsiveMenu fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen mobile__Nav p-4 sm:p-8 ease-in duration-500",
	main__div__close: "fixed top-10 left-[-100%] ease-in duration-500",
	main__header: "flex justify-between items-center",
	main__header__aside: "logo sm:mr-40",
	main__header__div:
		"navClose rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer",
	main__div__div: "mottoCover border-b border-gray-300 my-4 text-sm sm:text-lg",
};

interface Mobile {
	nav: boolean;
	handleNav: () => void;
}

function Mobile__Nav({ nav, handleNav }: Mobile) {

	return (
		<main className={nav ? styles.main__open : styles.main__close}>
			<div className={nav ? styles.main__div__open : styles.main__div__close}>
				<header className={styles.main__header}>
					<aside className={styles.main__header__aside}>
						<Link href="/">
							Learn <strong>languages</strong>
						</Link>
					</aside>
					<div onClick={handleNav} className={styles.main__header__div}>
						<CgClose />
					</div>
				</header>
				<div className={styles.main__div__div}>
					<p>Evolution means everyday learning</p>
				</div>

				<Mobile_UL handleNav={handleNav} />

			</div>
		</main>
	);
}

export default Mobile__Nav;
