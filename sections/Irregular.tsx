"use client";

import { useEffect, useState } from "react";

import Input from "../components/card/Card_Input";
import CardButton from "../components/card/CardButton";
import CardHint from "../components/card/CardHint";

import Score from "../components/card/Score";
import { Irregular } from "../interface/";

const styles = {
  section:
    "section_Responsive flex justify-center items-center responsiveSection",
  section_div:
    "max-w-sm card my-8 xl:my-0 rounded-3xl text-center border-4 border-double __border_color ",
  score_div: "py-3 px-6 ",
  btn_div: " text-gray-600",
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
          {/* ---   3   ---- */}
          <div className={styles.btn_div}>
            <CardButton onClick={randomWord} text="next word" />
          </div>
        </div>

        <div className={styles.btn_div}>
          {/* TOGGLE HINT !HINT */}
          <CardButton onClick={() => setHint((hint) => !hint)} text="hint" />

          {/* IF HINT == TRUE SHOW ANSWERS */}
          {hint ? (
            <CardHint
              base={dataTS[rand].base}
              pastSimple={dataTS[rand].pastSimple}
              pastSimple2={dataTS[rand].pastSimple2}
              pastParticiple={dataTS[rand].pastParticiple}
              pastParticiple2={dataTS[rand].pastParticiple2}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default IrregularVerbs;
