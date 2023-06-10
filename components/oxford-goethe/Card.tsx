"use client";
import { useState } from "react";
import { Card_Vocabs } from "../../interface/";
import Image from "next/image";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

//FLAGS images
import czFlag from "../../myData/images/cz.png";
import enFlag from "../../myData/images/eng.png";
{
  /*

  This Card component is used in OXford B1, B2, C1 & Göethe

  */
}

const styles = {
	section:
		"relative flex justify-center items-center p-2 sm:p-0 responsiveSection",
	section__div:
		"w-full sm:w-[600px] h-[250px] sm:h-[270px] md:h-[320px] border-double border-4 border-blue-800  rounded-lg shadow-lg shadow-blue-800 preserve-3d group my-rotate-y-180 duration-1000 flex flex-col justify-around ",
	article: "w-full flex flex-col justify-center sm:grow ",
	section__div__btnCover:
		"flex justify-around text-center border-t-2 border-blue-400",
	h3: "py-2 md:py-4  text-center border-b border-blue-600 w-auto mx-auto",
	button_green:
		"cardBtn bg-green-600 hover:bg-green-800 focus:bg-green-800 active:bg-green-800",
	button_red: "cardBtn bg-red-600 hover:bg-red-800 focus:bg-red-800 active:bg-red-800",
	cardBack:
		"absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden w-full h-full mainCardBack",
	cardBack__div: "h-full text-center flex flex-col items-center text-gray-600 ",
	cardBack__answersCover: "w-full h-full flex flex-col justify-center md:p-4",
	cardBack__btnCover: "w-full flex justify-around   border-t-2 border-blue-400",
};

const Card = ({ dataTS }: { dataTS: Card_Vocabs[] }) => {

  const [data, setData] = useState(dataTS[0]);
  const { czWord, wordTranslated, sentenceTranslated } = data;
  const [switchSide, setSwitchSide] = useState<boolean>(true);
  const [switchLanguage, setSwitchLanguage] = useState<boolean>(true);


  const randomWord = () => {
	const rand = Math.floor(Math.random() * dataTS.length);
    setData(dataTS[rand]);
  };

  return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
			className={styles.section}>
			<motion.div
				className={styles.section__div}
				animate={{ rotateY: switchSide ? 0 : 180 }}>
				<article className={styles.article}>
					{switchLanguage ? (
						sentenceTranslated ? (
							<div>
								<h3 className={styles.h3}>
									{sentenceTranslated}</h3>
								<h3 className={styles.h3}>{wordTranslated}</h3>

							</div>
						) : (
							<h3 className={styles.h3}>{wordTranslated}</h3>
						)
					) : (
						<h3 className={styles.h3}>{czWord}</h3>
					)}
				</article>

				<div className={styles.section__div__btnCover}>
					<button onClick={() => [setSwitchLanguage(!switchLanguage)]}>
						{switchLanguage ? (
							<Image src={czFlag} alt="cz-flag" />
						) : (
							<Image src={enFlag} alt="eng-flag" />
						)}
					</button>

					<button
						className={styles.button_red}
						onClick={() => [setSwitchSide(!switchSide)]}>
						answer
					</button>

					<button className={styles.button_green} onClick={randomWord}>
						Next word
					</button>
				</div>

				<motion.div className={styles.cardBack}>
					<div className={styles.cardBack__div}>
						{switchLanguage ? (
							sentenceTranslated ? (
								<div className={styles.cardBack__answersCover}>
									<h3 className={styles.h3}>{sentenceTranslated}</h3>
									<h3 className={styles.h3}>{wordTranslated}</h3>
									<h3 className={styles.h3}>{czWord}</h3>
								</div>
							) : (
								<div className={styles.cardBack__answersCover}>
									<h3 className={styles.h3}>{wordTranslated}</h3>
									<h3 className={styles.h3}>{czWord}</h3>
								</div>
							)
						) : sentenceTranslated ? (
							<div className={styles.cardBack__answersCover}>
								<h3 className={styles.h3}>{czWord}</h3>
								<h3 className={styles.h3}>{sentenceTranslated}</h3>
								<h3 className={styles.h3}>{wordTranslated}</h3>
							</div>
						) : (
							<div className={styles.cardBack__answersCover}>
								<h3 className={styles.h3}>{czWord}</h3>
								<h3 className={styles.h3}>{wordTranslated}</h3>
							</div>
						)}

						<div className={styles.cardBack__btnCover}>
							<button
								className={styles.button_green}
								onClick={() => [setSwitchSide(!switchSide)]}>
								Question
							</button>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Card;
