"use client"

import { FC, useEffect, useState } from "react";
// import  getLocalStorage  from "../utils/get_Local_Storage";

import CardInputs from "../components/card/Card_Inputs";
import CardButton from "../components/card/CardButton";
import CardHint from "../components/card/CardHint";

import Score from "../components/card/Score";

const styles = {
  section :'flex justify-center items-center w-full h-[91vh] responsiveSection',
  section_div: 'max-w-sm card my-8 sm:my-0 border-4 border-double border-blue-700 rounded-lg shadow-xl shadow-slate-600 text-center',
  score_div: 'py-3 px-6 border-b border-gray-300',
  btn_div: 'border-t border-gray-300 text-gray-600',
 
}

const IrregularVerbs: FC = ({ dataJSON }) => {
  const [totalScore, setTotalScore] = useState([]);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [hint, setHint] = useState(false);
  const [rand, setRand] = useState(0);



//Set totalScore from localStorage
  useEffect(() => {
    localStorage.setItem("totalScore", JSON.stringify(totalScore));
  }, [totalScore]);

  {
    /* Gives a random number -> word from a list
      Change input styles to default
*/
  }
  
  function randomWord(e) {
    setRand(Math.floor(Math.random() * dataJSON.length));
  
    setStars(0);
    setHint(false);

    const myInputs = e.target.parentElement.previousSibling.querySelectorAll('input');

    myInputs.forEach((input:any) => {
     
      input.parentElement.style.backgroundColor = "transparent";
      input.style.color = "gray";
      input.style.fontWeight = "normal";
      input.readOnly = false;
      input.value = "";

     
    });

  }

  return (
    <section className= {styles.section}>
      <div className={styles.section_div}>
        <div className={styles.score_div}>
          Celkové skóre: <span>{totalScore > 0 ? totalScore : 0}</span>
        </div>
        <div className={styles.score_div}>
          Momentální skóre: <span>{score > 0 ? score : 0}</span>
        </div>

        <Score score={stars} />

        <div className="px-6 inputs">
          <CardInputs
            myData={dataJSON[rand]}
            setTotalScore={setTotalScore}
            setScore={setScore}
            setStars={setStars}
          />

        </div>

        {/*the function gives new random word & set up styles to default */}
        <div className={styles.btn_div}>
          <CardButton onClick={randomWord} text="next word" />
        </div>

        <div className={styles.btn_div}>
          {/* button toggle hint !hint */}
          <CardButton onClick={() => setHint((hint) => !hint)} text="hint" />

          {/* if hint is true show answers */}
          {hint ? (
            <CardHint
              base={dataJSON[rand].base}
              pastSimple={dataJSON[rand].pastSimple}
              pastSimple2={dataJSON[rand].pastSimple2}
              pastParticiple={dataJSON[rand].pastParticiple}
              pastParticiple2={dataJSON[rand].pastParticiple2}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default IrregularVerbs;
