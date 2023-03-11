"use client";

import { useState } from "react";
import Link from "next/link";

import { TiThMenu } from "react-icons/ti";
import Mobile__Nav from "./Mobile__Nav";

import {
  IrregularVerbs,
  OxfordB1,
  OxfordB2,
  OxfordC1,
  LukesPhrasal,
  VerbenData,
  Goethe,
} from "../../myData";

import DarkModeBtn from "./DarkModeBtn";
const styles = {
  nav: 'flex justify-center items-center w-full  min-h-[10vh] shadow-xl z-[400] px-4',
  nav__div: 'navDetails w-full h-full flex items-start   relative text-xl ',
  aside: 'logo sm:w-1/3 ',
  article: 'justify-around items-start w-full h-full hidden md:flex',
  nav__ul: 'flex flex-col border-solid border-t-4 border-sky-400 navDetails',
} as const

function Navbar(){
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={styles.nav}
      /* style={darkMode ? stylesSwitch.dark.basic : stylesSwitch.light.basic}*/
    >
      <div className={styles.nav__div}>
        <aside className={styles.aside}>
          <Link href="/">
            Learn <strong>languages</strong>
          </Link>
        </aside>
        <article className={styles.article}>
          <Link href="/">Home</Link>
          <details className="cursor-pointer">
            <summary className="uppercase logo">
              <strong className="hover:text-sky-700">English</strong>
            </summary>
            <div className={styles.nav__ul}>
              <Link href="/english/irregular-verbs">{`Irregular Verbs (${IrregularVerbs.length})`}</Link>
              <Link href="/english/search-irregular">{`Irregular List (${IrregularVerbs.length})`}</Link>
              <Link href="/english/oxford-B1">{`Oxford B1 (${OxfordB1.length})`}</Link>
              <Link href="/english/oxford-B2">{`Oxford B2 (${OxfordB2.length})`}</Link>
              <Link href="/english/oxford-C1">{`Oxford C1 (${OxfordC1.length})`}</Link>
              <Link href="/english/phrasal-verbs">{`Phrasal Verbs (${LukesPhrasal.length})`}</Link>
              <Link href="/english/pagination">Pagination</Link>
            </div>
          </details>

          <details className="cursor-pointer">
            <summary className="uppercase logo">
              <strong className="hover:text-sky-700">Deutsch</strong>
            </summary>
            <ul className="flex flex-col border-solid border-t-4 border-sky-400 navDetails">
              <Link href="/german/irregular-verbs">{`Unregelmäßige Verben (${VerbenData.length})`}</Link>
              <Link href="/german/goethe">{`Goethe (${Goethe.length})`}</Link>
              <Link href="/german/memory">Memory</Link>
            </ul>
          </details>
        </article>

        <span className="hidden md:flex  bottom-2 right-4 text-3xl">
          <DarkModeBtn />
        </span>

        <div className="text-4xl md:hidden ml-auto">
          <TiThMenu onClick={handleNav} />
        </div>
      </div>
      <Mobile__Nav nav={nav} handleNav={handleNav} />
    </nav>
  );
};

export default Navbar;
