// create a better new card component"use client";
"use client"
import { useState } from "react";
import { Card_Vocabs } from "../../interface/";
import Image from "next/image";

import { motion } from "framer-motion";
import { OxfordB1, OxfordB2, OxfordC1, Goethe } from "../../myData2/";

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
	card: "flex flex-col justify-between w-full sm:w-[600px] h-[250px] sm:h-[270px] md:h-[320px] border-double border-4 border-blue-800  rounded-lg shadow-lg shadow-blue-800 preserve-3d group my-rotate-y-180 duration-1000 ",
	article: "w-full flex flex-col justify-center sm:grow ",
	card__div__btnCover:
		"flex justify-around items-center text-center border-t-2 border-blue-400 min-h-[10%]",
	h3: "py-2 md:py-4  text-center border-b border-blue-600 w-auto mx-auto",
	button_green:
		"cardBtn bg-green-600 hover:bg-green-800 focus:bg-green-800 active:bg-green-800",
	button_red:
		"cardBtn bg-red-600 hover:bg-red-800 focus:bg-red-800 active:bg-red-800",
	image: "hover:rotate-90 transition ease-in-out duration-700",
	cardBack:
		"absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden w-full h-full mainCardBack",
	cardBack__div: "h-full text-center flex flex-col items-center text-gray-600 ",
	cardBack__answersCover: "w-full h-full flex flex-col justify-center md:p-4",
	cardBack__btnCover:
		"w-full flex justify-around items-center  border-t-2 border-blue-400",
};

interface Words  {
	word: string | undefined;
	sentenceExample?: string;
	czWord: string;
	czSentence?: string;
}

const Card = () => {

  const [number, setNumber] = useState<number>(1);
  const [incommingData, setIncommingData] = useState<Words[]>(OxfordB1);

  const {word, sentenceExample, czWord, czSentence} = incommingData[number];
  const [switchSide, setSwitchSide] = useState<boolean>(true);
  const [switchLanguage, setSwitchLanguage] = useState<boolean>(true);

  const randomWord = () => {
	setNumber(Math.floor(Math.random() * incommingData.length));
  };

  const handleClick = (data: Words[]) => {
	setNumber(0);
	setIncommingData(data);
  }

  return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
			className={styles.section}>
			<motion.div
				className={styles.card}
				animate={{ rotateY: switchSide ? 0 : 180 }}
				transition={{ duration: 0.5 }}>
				<header className=" flex flex-row justify-around w-full p-2 text-xl">
					<button onClick={() => handleClick(OxfordB1)}>B1</button>
					<button onClick={() => handleClick(OxfordB2)}>B2</button>
					<button onClick={() => handleClick(OxfordC1)}>C1</button>
					<button onClick={() => handleClick(Goethe)}>Goethe</button>
				</header>
				<article className={styles.article}>
					{switchLanguage ? (
						sentenceExample ? (
							<div>
								<h3 className={styles.h3}>{sentenceExample}</h3>
								<h3 className={styles.h3}>{word}</h3>
							</div>
						) : (
							<h3 className={styles.h3}>{word}</h3>
						)
					) : (
						<>
							<h3 className={styles.h3}>{czWord}</h3>
							<h3 className={styles.h3}>{czSentence}</h3>
						</>
					)}
				</article>

				<div className={styles.card__div__btnCover}>
					<button onClick={() => [setSwitchLanguage(!switchLanguage)]}>
						{switchLanguage ? (
							<Image className={styles.image} src={czFlag} alt="cz-flag" />
						) : (
							<Image className={styles.image} src={enFlag} alt="eng-flag" />
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
							sentenceExample ? (
								<div className={styles.cardBack__answersCover}>
									<h3 className={styles.h3}>{sentenceExample}</h3>
									<h3 className={styles.h3}>{word}</h3>
									<h3 className={styles.h3}>{czWord}</h3>
								</div>
							) : (
								<div className={styles.cardBack__answersCover}>
									<h3 className={styles.h3}>{word}</h3>
									<h3 className={styles.h3}>{czWord}</h3>
								</div>
							)
						) : sentenceExample ? (
							<div className={styles.cardBack__answersCover}>
								<h3 className={styles.h3}>{czWord}</h3>
								<h3 className={styles.h3}>{sentenceExample}</h3>
								<h3 className={styles.h3}>{word}</h3>
							</div>
						) : (
							<div className={styles.cardBack__answersCover}>
								<h3 className={styles.h3}>{czWord}</h3>
								<h3 className={styles.h3}>{word}</h3>
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
