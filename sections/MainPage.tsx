"use client";

import { useState, useEffect } from "react";
import Table from "../components/mainPage/Table";
import { Root } from "../components/mainPage/interface";
import "../styles/MainPage.css";
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion';
import useFetch from "../components/fetch/Fetch";


const styles = {
  section:
    "responsiveSection flex flex-col justify-center items-center w-full min-h-[90vh] h-auto sm:h-[90%] border-red-300  border-t-2",
  card__div:
    "mainCard w-[300px] h-[420px] bg-transparent cursor-pointer group perspective",
  card__div__div:
    "preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000",
  card__div__div__div: "w-full h-full",
  cardBack:
    "mainCardBack my-rotate-y-180 backface-hidden w-full h-full mt-[-420px] overflow-hidden shadow-lg shadow-gray-400",
  cardBack__div:
    "text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 ",
  cardBack__div__btn:
    "bg-teal-500 px-6 py-2 mt-[8rem] mb-8 font-semibold text-white rounded-full delay-500 duration-1000 scale-0 group-hover:scale-125",
  button:
    "bg-teal-500 px-6 py-2 mt-[8rem] mb-8 font-semibold text-white rounded-full delay-500 duration-1000 scale-0 group-hover:scale-125",
} as const;

interface Props {
  apiData: any //Root | undefined;
  loading: boolean;
}

function MainPage() {
 /* const [data, setMyData] = useState<Root | undefined>();*/
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const {apiData, loading}:Props = useFetch(url);

  return (
    <section className={styles.section}>

      <h1 className="my-2 sm:mt-0">
        <Typewriter
          options={{
            strings: ["Welcome", "Humans" ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
     
  
      <div className={styles.card__div}>
        <div className={styles.card__div__div}>
          <div className={styles.card__div__div__div}>
            <motion.img
            initial = {{x: 800}}
            animate = {{x: 0}}
            transition = {{delay: 1}}
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20081229142345%2Ffallout%2Fimages%2F2%2F2a%2FFallout2front.jpg&f=1&nofb=1"
              className="w-full h-full border-2"
              alt="fallout-logo"
            />
          </div>
         
          <div className={styles.cardBack}>
            <div className={styles.cardBack__div}>
              <h2 className="my-4 text-3xl font-semibold self-center">
                {loading && apiData.chartName}
              </h2>

              {loading && <Table myData={apiData.bpi} />}
              <button className={styles.button}>Last update:</button>
              <h2 className="text-sm font-semibold ">
                {loading && apiData.time.updated}
              </h2>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default MainPage;
