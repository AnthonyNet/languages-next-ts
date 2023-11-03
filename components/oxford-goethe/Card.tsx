"use client";
import { useState } from "react";
import { Card_Vocabs } from "../../interface/";
import Image from "next/image";
import { motion } from "framer-motion";
//FLAGS images
import czFlag from "../../myData/images/cz.png";
import enFlag from "../../myData/images/eng.png";
import Text_Card from "./Text_Card"
import Card_Back from "./Card_Back";
import "../../styles/MainPage.css";
import './Card.css'
{
	/*
  This Card component is used in OXford B1, B2, C1 & Göethe
  */
}

const styles = {
	section:
		"relative w-full h-100-dvh  flex justify-center items-center p-2 sm:p-0 responsiveSection",
	card__container:
		"relative w-full h-[50vh] mt-10-[vh] max-w-[600px] h-[280px] md:max-h-[400px]   border-double border-4   rounded-lg  preserve-3d group my-rotate-y-180 duration-1000 flex flex-col  __border_color __css_small_height_index_container",
	card__btn__container:
		"flex justify-around w-full h-[70px] items-center text-center border-t-2 __border_color",
	h3: "py-2 md:py-4  text-center border-b  w-auto mx-auto __border_color",
	button:
		"rounded w-30 sm:w-40 h-14 text-2xl font-extrabold scale-90 hover:scale-100 transition-all ease-in-out delay-100 duration-1000  __button_color  __text_color2 opacity-100 cursor-pointer",
	icon: "hover:rotate-90 transition ease-in-out duration-700 fixed top-2 left-2  ring-2 rounded-full  drop-shadow-sm __background __gradient",
	cardBack:
		"absolute top-0 my-rotate-y-180 backface-hidden  w-full h-full __oxford_card_background",
	cardBack__div: "h-full text-center flex flex-col  ",
	cardBack__answersCover:
		"w-full h-full flex flex-col justify-center md:p-4 grow",
	cardBack__btnCover:
		"w-full h-[70px]  border-t-2 __border_color __text_shadow ",
};

const Card = ({ dataTS }: { dataTS: Card_Vocabs[] }) => {
	const [data, setData] = useState(dataTS[0]);
	const { word, sentenceExample, czWord /*czSentence*/ } = data;
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
				className={styles.card__container}
				animate={{ rotateY: switchSide ? 0 : 180 }}
				transition={{ duration: 0.5 }}>
				{switchSide && (
					<button onClick={() => [setSwitchLanguage(!switchLanguage)]}>
						{switchLanguage ? (
							<Image className={styles.icon} src={czFlag} alt="cz-flag" />
						) : (
							<Image className={styles.icon} src={enFlag} alt="eng-flag" />
						)}
					</button>
				)}

				<Text_Card props={{switchLanguage, sentenceExample, word, czWord}}/>

				<div className={styles.card__btn__container}>
					{switchSide && (
						<>
							<button
								className={styles.button}
								onClick={() => [setSwitchSide(!switchSide)]}>
								Answer
							</button>

							<button className={styles.button} onClick={randomWord}>
								Next word
							</button>
						</>
					)}
				</div>
				<Card_Back props={{switchSide, setSwitchSide, switchLanguage,sentenceExample, word, czWord}}/>
			</motion.div>
		</motion.section>
	);
};

export default Card;
