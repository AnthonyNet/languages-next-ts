"use client";
import { useState } from "react";
import { Card_Vocabs } from "../../interface/";
import Image from "next/image";

import { motion } from "framer-motion";

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
		"w-full sm:w-[600px] h-[250px] sm:h-[270px] md:h-[320px] border-double border-4   rounded-lg  preserve-3d group my-rotate-y-180 duration-1000 flex flex-col justify-around __border_color",
	article: "w-full flex flex-col justify-center sm:grow ",
	section__div__btnCover:
		"flex justify-around text-center border-t-2 __border_color",
	h3: "py-2 md:py-4  text-center border-b  w-auto mx-auto __border_color",
	button:
		"rounded w-40 h-14 text-2xl font-extrabold scale-90 hover:scale-100 transition-transform ease-in-out delay-100 duration-500  __button_color  __text_color2 opacity-100",
	hidden: " hidden",
	image: "hover:rotate-90 transition ease-in-out duration-700",
	cardBack:
		"absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden w-full h-full __oxford_card_background",
	cardBack__div: "h-full text-center flex flex-col items-center ",
	cardBack__answersCover: "w-full h-full flex flex-col justify-center md:p-4",
	cardBack__btnCover:
		"w-full flex justify-around   border-t-2 __border_color __text_shadow",
};

const Card = ({ dataTS }: { dataTS: Card_Vocabs[] }) => {

  const [data, setData] = useState(dataTS[0]);
  const {word, sentenceExample, czWord, /*czSentence*/} = data;
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
				animate={{ rotateY: switchSide ? 0 : 180 }}
				transition={{ duration: 0.5 }}>
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
						<h3 className={styles.h3}>{czWord}</h3>
					)}
				</article>

				<div className={styles.section__div__btnCover}>
					<button onClick={() => [setSwitchLanguage(!switchLanguage)]}>
						{switchLanguage ? (
							<Image className={styles.image} src={czFlag} alt="cz-flag" />
						) : (
							<Image className={styles.image} src={enFlag} alt="eng-flag" />
						)}
					</button>

					<button
						className={
							switchSide ? styles.button : styles.button + " opacity-0"
						}
						onClick={() => [setSwitchSide(!switchSide)]}>
						Answer
					</button>

					<button
						className={
							switchSide ? styles.button : styles.button + " opacity-0"
						}
						onClick={randomWord}>
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
								className={
									!switchSide ? styles.button : styles.button + " opacity-0"
								}
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
