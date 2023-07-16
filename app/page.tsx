"use client";

import Table from "../components/mainPage/Table";
import "../styles/MainPage.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import useFetch from "../components/fetch/Fetch";

const styles = {
	section:
		"responsiveSection flex flex-col justify-center items-center  min-h-[100vh] h-auto sm:h-[90%] pokusX",
	card__div: "bg-transparent cursor-pointer",
} as const;

interface Props {
	apiData: any; //Root | undefined;
	loading: boolean;
}

function MainPage() {
	/* const [data, setMyData] = useState<Root | undefined>();*/
	const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
	const { apiData, loading }: Props = useFetch(url);

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
					<h1 className="text-[180px]">
						Learn <strong>languages</strong>
					</h1>

				</motion.div>

			</section>
			<section className={styles.section}></section>
		</>
	);
}

export default MainPage;
