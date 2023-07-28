import React from 'react'

const styles = {

	h3: "py-2 md:py-4  text-center border-b  w-auto mx-auto __border_color",
	button:
		"rounded w-30 sm:w-40 h-14 text-2xl font-extrabold scale-90 hover:scale-100 transition-all ease-in-out delay-100 duration-1000  __button_color  __text_color2 opacity-100 cursor-pointer",

	cardBack:
		"absolute top-0 my-rotate-y-180 backface-hidden  w-full h-full __oxford_card_background",
	cardBack__div: "h-full text-center flex flex-col  ",
	cardBack__answersCover:
		"w-full h-full flex flex-col justify-center md:p-4 grow",
	cardBack__btnCover:
		"w-full h-[70px]  border-t-2 __border_color __text_shadow ",
};

interface Props {
	props: {
		switchSide: boolean;
		setSwitchSide: React.Dispatch<React.SetStateAction<boolean>>;
		switchLanguage: boolean;
		sentenceExample?: string;
		word: string;
		czWord: string;
	};
}
const Card_Back = ({props}:Props) => {
	const {switchSide, setSwitchSide, switchLanguage, word, sentenceExample, czWord } = props;
  return (
		<div className={styles.cardBack}>
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
					{!switchSide && (
						<button
							className={styles.button}
							onClick={() => [setSwitchSide(!switchSide)]}>
							Question
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card_Back