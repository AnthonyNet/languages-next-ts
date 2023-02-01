"use client";

import { useState, useEffect } from "react";

import { OxfordB1, OxfordB2, OxfordC1, Goethe } from "../myData/";

import Top_Menu from "../components/pagination/Top_Menu";
import Bottom_Menu from "../components/pagination/Bottom_Menu";

const styles = {
  section:
    "min-h-screen flex flex-column justify-center items-baseline flex-wrap",
  table: "table-fixed min-w-[50vw] m-auto",
  thead__tr: "flex justify-around",
  tbody__td: "w-[50%] border-red-400 border-r-4",
} as const;

function Pagination() {
  //add id to all myData items
  /*useEffect(() => {
    myData.forEach((item, index) => {
      item.id = index + 1;
    });
  });*/

  const [myData, setMyData] = useState(OxfordB1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [wordsPerPage, setPostsPerPage] = useState<number>(25);

  //  25                    1             25
  const lastWordIndex: number = currentPage * wordsPerPage;
  //      0              25                 25
  const firstWordIndex: number = lastWordIndex - wordsPerPage;
  //                                0                  25
  const currentPosts = myData.slice(firstWordIndex, lastWordIndex);

  let pages: number[] = [];

  for (let i = 1; i <= Math.ceil(myData.length / wordsPerPage); i++) {
    pages.push(i);
  }

  const prevPage = () => {
    if (currentPage < 2) {
      setCurrentPage(pages.length);
    } else {
      setCurrentPage((page) => page - 1);
    }
  };

  const nextPage = () => {
    if (currentPage > pages.length - 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage((page) => page + 1);
    }
  };

  const [myNumb, setMyNumb] = useState(0);

  useEffect(() => {
    if (myNumb == 0) {
      setMyData(OxfordB1);
    } else if (myNumb == 1) {
      setMyData(OxfordB2);
    } else if (myNumb == 2) {
      setMyData(OxfordC1);
    } else {
      setMyData(Goethe);
    }
  }, [myNumb]);


  return <section className={styles.section}>
      <Top_Menu myNumb={myNumb} setMyNumb={setMyNumb} />

      <main className="w-full">
        <h2 className="text-center">Pagination</h2>
        <table className={styles.table}>
          <thead>
            <tr className={styles.thead__tr}>
              <th>CZ</th>
              <th>ENG</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((item, index) => {
              return <tr
                  key={index}
                  className="border-b-2 border-red-300 flex  flex-nowrap"
                >
                  <td className={styles.tbody__td}>{item.czWord}</td>
                  {item.sentenceTranslated ? (
                    <td className="w-[50%] text-right">
                      {item.sentenceTranslated}
                    </td>
                  ) : (
                    <td className="w-[50%] text-right">
                      {item.wordTranslated}
                    </td>
                  )}
                </tr>
            
            })}
          </tbody>
        </table>
      </main>

      <Bottom_Menu
        pages={pages}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
};

export default Pagination;
