"use client";

import { useEffect, useState } from "react";
import { Suspense } from "react";
import { InputSkeleton } from "@/app/ui/skeletons";

import Input from "../components/card/Card_Input";
import CardButton from "../components/card/CardButton";
import CardHint from "../components/card/CardHint";

import Score from "../components/card/Score";
import { Irregular } from "../interface/";
import { RxArrowRight } from "react-icons/rx";
import "../styles/Irregular.css";
const styles = {
	section:
		"h-auto min-h-[100vh] section_Responsive flex justify-center items-center responsiveSection __irregular_margin",
	section_div:
		"max-w-sm card  mx-2 rounded-3xl text-center border-4 border-double __border_color",
	score_div: "py-3 px-6 ",
	btn_div:
		"min-h-[50px]  flex flex-row h-auto justify-center items-center px-4 rounded-full mb-2 font-bold",
	h5: "text-3xl dark:bg-black font-medium p-4",
	ul: "flex flex-col justify-around text-center mb-2",
} as const;

function IrregularVerbs({ dataTS }: { dataTS: Irregular[] }) {
	const [score, setScore] = useState<number>(0);
	const [stars, setStars] = useState<number>(0);
	const [hint, setHint] = useState<boolean>(false);
	const [rand, setRand] = useState<number>(0);
	const [defaultInput, setDefaultInput] = useState<boolean>(false);

	const [totalScore, setTotalScore] = useState<number | any>([]);

	const { cz } = dataTS[rand];

	/*------------------------------------------
Props Data from Object to Array
 + first item deleted from Array
--------------------------------------------*/

	const propertyValues = Object.values(dataTS[rand]);
	propertyValues.shift();

	/*------------------------------------------
  SET LOCAL STRORAGE IF NOT EXISTS
   ------------------------------------------*/

	if (typeof window !== "undefined") {
		// do localStorage stuff here
		const item = localStorage.getItem("totalScore");
		if (item == null || undefined) {
			// localStorage.setItem('totalScore',JSON.stringify('0'));
			localStorage.setItem("totalScore", "0");
		}
	}

	/*------------------------------------------
   SET TOTAL SCORE FROM LOCAL STORAGE ONE TIME
  ------------------------------------------*/
	useEffect(() => {
		setTotalScore(JSON.parse(localStorage.getItem("totalScore") || ""));
		//   setTotalScore(JSON.parse(localStorage.getItem('totalScore') || ''));
	}, []);

	/*------------------------------------------
AFTER CLICK ON <CardButton />
GIVES RANDOM NUMBER
RESET NUMBER OF STARS
HIDE HINTS
------------------------------------------*/

	function randomWord() {
		setRand(Math.floor(Math.random() * dataTS.length));
		setStars(0);
		setHint(false);
		setDefaultInput(!defaultInput);

		const inputs = document.getElementsByClassName("card_Input");
		for (let i = 0; i < inputs.length; i++) {
			let item = inputs[i] as HTMLInputElement;
			item.readOnly = false;
		}
	}

	return (
		<section className={styles.section}>
			<div className={styles.section_div}>
				<div className={styles.score_div}>
					Celkové skóre: <span>{totalScore}</span>
				</div>
				<div className={styles.score_div}>
					Momentální skóre: <span>{score > 0 ? score : 0}</span>
				</div>

				<Score score={stars} />

				<div className="px-6 inputs">
					<Suspense fallback={<InputSkeleton />}>
						<h5 className={styles.h5}>{cz}</h5>

						<ul className={styles.ul}>
							{propertyValues.map((word, index) => {
								const array = [
									"Present Simple",
									"Past Simple",
									"Past Participle",
									"Past Simple 2",
									"Past Participle 2",
								];

								return (
									<Input
										key={index}
										word={word}
										setTotalScore={setTotalScore}
										setScore={setScore}
										setStars={setStars}
										placeholder={array[index]}
										defaultInput={defaultInput}
										totalScore={totalScore}
									/>
								);
							})}
						</ul>
					</Suspense>
				</div>

				<div className="flex flex-row w-full justify-around">
					<div className={styles.btn_div + " __background2"}>
						{/* TOGGLE HINT !HINT */}
						<CardButton hint={hint} setHint={setHint} />
					</div>
					<div className={styles.btn_div + " __background2"}>
						<RxArrowRight
							onClick={() => randomWord()}
							className="w-[40px] h-[40px] transition  ease-in-out duration-500 hover:scale-75 __text_color2"
						/>
					</div>
				</div>

				{/* IF HINT == TRUE SHOW ANSWERS */}
				{hint ? (
					<div className={styles.btn_div}>
						<CardHint
							base={dataTS[rand].base}
							pastSimple={dataTS[rand].pastSimple}
							pastSimple2={dataTS[rand].pastSimple2}
							pastParticiple={dataTS[rand].pastParticiple}
							pastParticiple2={dataTS[rand].pastParticiple2}
						/>
					</div>
				) : null}
			</div>
		</section>
	);
}

export default IrregularVerbs;
