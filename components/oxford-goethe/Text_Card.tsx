import React from 'react'

const styles = {
	card__text__cover: "w-full flex flex-col justify-center grow",
	h3: "py-2 md:py-4  text-center border-b  w-auto mx-auto __border_color",
};

interface Props {
	props: {
		switchLanguage: boolean;
		sentenceExample?: string;
		word: string;
		czWord: string;
	};
}
const Text_Card = ({props}:Props) => {


  return (
		<article className={styles.card__text__cover}>
			{props.switchLanguage ? (
				props.sentenceExample ? (
					<div>
						<h3 className={styles.h3}>{props.sentenceExample}</h3>
						<h3 className={styles.h3}>{props.word}</h3>
					</div>
				) : (
					<h3 className={styles.h3}>{props.word}</h3>
				)
			) : (
				<h3 className={styles.h3}>{props.czWord}</h3>
			)}
		</article>
	);
}

export default Text_Card