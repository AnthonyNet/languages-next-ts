import {  useState } from "react";
import CardButton from "./CardButton";
import { CgClose } from "react-icons/cg";


{
  /* 
  
  This Card component is used in OXford B1, B2, C1 & Göethe
    
  */
}

const styles = {
  section : 'flex justify-center items-center w-full h-[100vh] p-2 sm:p-0 responsiveSection',
  section_div: 'w-[600px]  border-4 border-double border-blue-300 rounded-lg shadow-xl shadow-slate-600',
  ul: 'flex flex-col justify-around w-full text-center p-8 font-semibold italic',
}

const Card = ({ dataTS }:any) => {
  const [data, setData] = useState(dataTS);
  const [rand, setRand] = useState(0);
  const [switchLanguage, setSwitchLanguage] = useState(true);
  const [hidden, setHidden] = useState(true);



  const CardTrue = () => {
   
      return (
        <>
          <li  className= "p-8 border-b-2 border-slate-300">{data[rand].wordTranslated}</li>

          {data[rand].sentenceTranslated?(
            <li >{data[rand].sentenceTranslated}</li>
          ):null}

          {/* if hidden is true, answers are hidden */}

          <li
              className={hidden?"hidden":"visible flex items-center p-8 border-b-2 border-slate-300"}
              onClick={() => setHidden(!hidden)}
            >
              <strong className="m-auto mr-auto">
                {data[rand].czWord}
              </strong>
              <div className="-mr-4">
                <CgClose />
              </div>
            </li>
        </>
      );
  };

  const CardFalse = () =>{
    return (
      <>
        <li  className="p-8 border-b-2 border-slate-300">{data[rand].czWord}</li>

        <li className={hidden?"hidden":"visible flex items-center p-8 border-b-2 border-slate-300"}
            onClick={() => setHidden(!hidden)}>
            <strong className="m-auto mr-auto">
              {data[rand].wordTranslated}
            </strong>
            <div className="-mr-4">
              <CgClose />
            </div>
          </li>
          {data[rand].sentenceTranslated?(
          <li  className={hidden?"hidden":"visible  items-center w-full border-b-2 border-slate-300"}
          onClick={() => setHidden(!hidden)}
          >{data[rand].sentenceTranslated}</li>
        ):null}
      </>
    );
  }

  const randomWord = () => {
    setRand(Math.floor(Math.random() * data.length));
    setHidden(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.section_div}>
        <ul className={styles.ul}>
        {/* true = Foreign language to Czech false = Czech to Foeign language */}
          {switchLanguage? <CardTrue />: <CardFalse />}

          {hidden ? (
            <li
              className=" text-cyan-500 border-b-2 border-slate-300 p-8"
              onClick={() => setHidden(!hidden)}
            >
              show answer
            </li>
          ) : null
          }

          <li className="flex justify-around text-center mt-8">
            <CardButton onClick={randomWord} text={"Next word"} />

            <CardButton
              onClick={() => [setSwitchLanguage(!switchLanguage), setHidden(true)]}
              text={switchLanguage ? "CZ ➜ ENG" : "ENG ➜ CZ"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Card;
