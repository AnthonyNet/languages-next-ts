"use client"


import {useState , useEffect } from "react";

import {OxfordB1, OxfordB2, OxfordC1, Goethe} from "../myData/";
import {LeftArrow, RightArrow} from '../components/pagination/Arrows';

const styles = {
  section: 'min-h-screen flex flex-column justify-center items-baseline flex-wrap',
  nav: ' w-full h-auto border-4',
  ul: 'flex flex-row justify-around sm:w-[60%] m-auto flex-wrap',
  table: 'table-fixed min-w-[50vw] m-auto',
  thead__tr: 'flex justify-around',
  tbody__td: 'w-[50%] border-red-400 border-r-4',
  li__active: 'border-b-4 border-red-600',
};

function Pagination(){
  //add id to all myData items
  /*useEffect(() => {
    myData.forEach((item, index) => {
      item.id = index + 1;
    });
  });*/

  const [myData, setMyData] = useState(OxfordB1);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage, setPostsPerPage] = useState(25);
  const [menuPosts, setMenuPosts] = useState();

  const [marginLeft, setMarginLeft] = useState(0);

  //  25                    1             25
  const lastWordIndex = currentPage * wordsPerPage;
  //      0              25                 25
  const firstWordIndex = lastWordIndex - wordsPerPage;
  //                                0                  25
  const currentPosts = myData.slice(firstWordIndex, lastWordIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(myData.length / wordsPerPage); i++) {
    pages.push(i);
  }

  const style = {
    display: currentPage < currentPage - 1 ? "none" : "",
  };

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


  return (
    <section className={styles.section}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li 
            className={myNumb === 0 ? styles.li__active : ''}
            onClick={() => setMyNumb(0)}
          >
            Oxford B1
          </li>
          <li
            className={myNumb === 1 ? styles.li__active : ''}
            onClick={() => setMyNumb(1)}
          >
            Oxford B2
          </li>
          <li
            className={myNumb === 2 ? styles.li__active : ''}
            onClick={() => setMyNumb(2)}
          >
            Oxford C1
          </li>
          <li
            className={myNumb === 3 ? styles.li__active : ''}
            onClick={() => setMyNumb(3)}
          >
            Goethe De
          </li>
        </ul>
      </nav>

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
              return (
                <tr
                  key={index}
                  className="border-b-2 border-red-300 flex  flex-nowrap"
                >
                  <td className={styles.tbody__td}>
                    {item.czWord}
                  </td>
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
              );
            })}
          </tbody>
        </table>
      </main>

      <article className="flex flex-row  w-auto  justify-center">
        <ul className="flex flex-row  items-center justify-center border-4">

          {/* 
          PREVIOUS PAGE BUTTON
          */}

          <li className="sm:w-[50px] px-4 -mb-2" onClick={prevPage}>
            <LeftArrow />
          </li>

            {/* 
             PAGINATION MENU
          */}

          {pages.map((page, index) => {
            return (
              <li
                className={
                  page == currentPage
                    ? "text-xl border-b border-red-400  sm:w-[50px] text-center mt-2 h-[50px]"
                    : page < currentPage - 3
                    ? "hidden"
                    : // : page > currentPage + 4 && currentPage !=1 ? "hidden"
                    page > currentPage + 3 && page > 7
                    ? "hidden"
                    : "sm:w-[50px] sm:h-[50px] p-[2vw] sm:p-4 visible"
                }
                style={style}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </li>
            );
          })}

          {/* 
          NEXT PAGE BUTTON
          */}

          <li onClick={nextPage} className="sm:w-[50px] p-4 -mb-2">
            <RightArrow />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Pagination;
