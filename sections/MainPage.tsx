"use client";

import { useState, useEffect } from "react";
import Table from "../components/mainPage/Table";
import { Root, Time, Bpi } from "../components/mainPage/interface";
import "../styles/MainPage.css";

//This is an simple API for BitCoin currency
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const styles = {
  section:
    "responsiveSection flex flex-col justify-center items-center w-full min-h-[88vh] h-auto sm:h-[90%] border-red-300  border-t-2",
  card__div:
    "mainCard w-[300px] h-[420px] bg-transparent cursor-pointer group perspective",
  card__div__div:
    "preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000",
  card__div__div__div: "border-2 w-full h-full",
  cardBack:
    "mainCardBack my-rotate-y-180 backface-hidden w-full h-full mt-[-420px] overflow-hidden shadow-lg shadow-gray-400",
  cardBack__div:
    "text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 ",
  cardBack__div__btn:
    "bg-teal-500 px-6 py-2 mt-[8rem] mb-8 font-semibold text-white rounded-full delay-500 duration-1000 scale-0 group-hover:scale-125",
};

function MainPage(): JSX.Element {
  const [setData, setMyData] = useState<Root | undefined>();
  //const [setData, setMyData] = useState<any>();
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setMyData(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.section}>
      <h1 className="ml-[-50px] mt-2 sm:mt-0">Welcome</h1>
      <h1 className="ml-[50px]">
        <strong>humans...</strong>
      </h1>
      <div className={styles.card__div}>
        <div className={styles.card__div__div}>
          <div className={styles.card__div__div__div}>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20081229142345%2Ffallout%2Fimages%2F2%2F2a%2FFallout2front.jpg&f=1&nofb=1"
              className="w-full h-full"
              alt="fallout-logo"
            />
          </div>
          <div className={styles.cardBack}>
            <div className={styles.cardBack__div}>
              <h2 className="my-4 text-3xl font-semibold self-center">
                {setData && setData.chartName}
              </h2>

              {setData && <Table myData={setData.bpi} />}
              <button className="bg-teal-500 px-6 py-2 mt-[8rem] mb-8 font-semibold text-white rounded-full delay-500 duration-1000 scale-0 group-hover:scale-125">
                Last update:
              </button>
              <h1 className="text-sm font-semibold ">
                {setData && setData.time.updated}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*
       <div class="flex w-full h-full items-center justify-center flex-wrap">
      <div class="w-full md:w-1/2 xl:w-1/3 border-4 border-red-500 h-8"></div>
      <div class="w-full md:w-1/2 xl:w-1/3 border-4 border-red-500 h-8"></div>
      <div class="w-full md:w-1/2 xl:w-1/3 border-4 border-red-500 h-8"></div>
    </div>
     */}
    </section>
  );
}

export default MainPage;
