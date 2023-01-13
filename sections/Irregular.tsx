"use client";

import { useEffect, useState } from "react";

import Input from "../components/card/Card_Input";
import CardButton from "../components/card/CardButton";
import CardHint from "../components/card/CardHint";

import Score from "../components/card/Score";



const styles = {
  section: "section_Responsive flex justify-center items-center w-full h-[91vh] responsiveSection",
  section_div:
    "max-w-sm card my-8 xl:my-0 border-4 border-double border-blue-700 rounded-lg shadow-xl shadow-slate-600 text-center",
  score_div: "py-3 px-6 border-b border-gray-300",
  btn_div: "border-t border-gray-300 text-gray-600",
};



function IrregularVerbs({ dataTS }:any) {
    const [score, setScore] = useState(0);
    const [stars, setStars] = useState(0);
    const [hint, setHint] = useState(false);
    const [rand, setRand] = useState(0);
    const [defaultInput, setDefaultInput] = useState(false);
   // const [totalScore, setTotalScore] = useState<string[]>([]);
    const [totalScore, setTotalScore] = useState<any>([]);

    if (typeof window !== 'undefined') {
      // do localStorage stuff here
      const item = localStorage.getItem('totalScore')
      if(item== null|| undefined){
       // localStorage.setItem('totalScore',JSON.stringify('0'));
        localStorage.setItem('totalScore', '0');
      }
    } 

    useEffect(() => {
      setTotalScore(JSON.parse(localStorage.getItem('totalScore') || '' ));
   //   setTotalScore(JSON.parse(localStorage.getItem('totalScore') || ''));
    },[])
   

  function randomWord() {
    setRand(Math.floor(Math.random() * dataTS.length));
    setStars(0);
    setHint(false);
  
   setDefaultInput(true);
  }

 // create use effect to store totalScore in local storage


  return (
    <section className={styles.section}>
      <div className={styles.section_div}>
        <div className={styles.score_div}>
          Celkové skóre: <span>{ 
          totalScore
          }</span>
        </div>
        <div className={styles.score_div}>
          Momentální skóre: <span>{score > 0 ? score : 0}</span>
        </div>

        <Score score={stars} />

        <div className="px-6 inputs">
          <h5 className={"text-xl dark:bg-black font-medium mb-2 border-b border-gray-300"}>
            {dataTS[rand].cz}
          </h5>
        
          <ul className="flex flex-col justify-around text-center mb-2">
       
          <Input
              myData={dataTS[rand].base}
              setTotalScore={setTotalScore}
              setScore={setScore}
              setStars={setStars}
              placeholder={"Present Simple"}
              defaultInput={defaultInput}
              setDefaultInput={setDefaultInput}
              totalScore={totalScore}
             
              
            />
            <Input
              myData={dataTS[rand].pastSimple}
              setTotalScore={setTotalScore}
              setScore={setScore}
              setStars={setStars}
              placeholder="Past Simple"
              defaultInput={defaultInput}
              setDefaultInput={setDefaultInput}
              totalScore={totalScore}
             
              
            />
            {dataTS[rand].pastSimple2 && (
              <Input

                myData={dataTS[rand].pastSimple2}
                setTotalScore={setTotalScore}
                setScore={setScore}
                setStars={setStars}
                placeholder="Past Simple 2"
                defaultInput={defaultInput}
                setDefaultInput={setDefaultInput}
                totalScore={totalScore}
               
              />
            )}
            <Input
              myData={dataTS[rand].pastParticiple}
              setTotalScore={setTotalScore}
              setScore={setScore}
              setStars={setStars}
              placeholder="Past Participle"
              defaultInput={defaultInput}
              setDefaultInput={setDefaultInput}
              totalScore={totalScore}
             
              
            />
            {dataTS[rand].pastParticiple2 && (
              <Input

                myData={dataTS[rand].pastParticiple2}
                setTotalScore={setTotalScore}
                setScore={setScore}
                setStars={setStars}
                placeholder="Past Participle 2"
                defaultInput={defaultInput}
                setDefaultInput={setDefaultInput}
                totalScore={totalScore}
               
              
              />
            )}
          </ul>
           {/*the function gives new random word & set up styles to default */}
        <div className={styles.btn_div}>
          <CardButton onClick={randomWord} text="next word" />
        </div>
  
        </div>

       

        <div className={styles.btn_div}>
          {/* button toggle hint !hint */}
          <CardButton onClick={() => setHint((hint) => !hint)} text="hint" />

          {/* if hint is true show answers */}
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
