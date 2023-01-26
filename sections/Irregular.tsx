"use client";

import { useEffect, useState } from "react";

import Input from "../components/card/Card_Input";
import CardButton from "../components/card/CardButton";
import CardHint from "../components/card/CardHint";

import Score from "../components/card/Score";

const styles = {
  section:
    "section_Responsive flex justify-center items-center w-full h-[91vh] responsiveSection",
  section_div:
    "max-w-sm card my-8 xl:my-0 border-4 border-double border-blue-700 rounded-lg shadow-xl shadow-slate-600 text-center",
  score_div: "py-3 px-6 border-b border-gray-300",
  btn_div: "border-t border-gray-300 text-gray-600",
  h5: "text-xl dark:bg-black font-medium mb-2 border-b border-gray-300",
  ul: "flex flex-col justify-around text-center mb-2",
};

interface DataTS {
  cz: string;
  cz2?: string;
  base: string;
  pastSimple: string;
  pastSimple2?: string;
  pastParticiple: string;
  pastParticiple2?: string;
}

function IrregularVerbs({ dataTS }:any) {
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [hint, setHint] = useState(false);
  const [rand, setRand] = useState(0);
  const [defaultInput, setDefaultInput] = useState(false);

  const [totalScore, setTotalScore] = useState<any>([]);
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
                  myData={word}
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
