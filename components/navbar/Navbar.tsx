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

import DarkModeBtn from "../../app/DarkModeBtn";

function Navbar(){
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={` w-full  min-h-20 shadow-xl z-[100]`}
      /* style={darkMode ? stylesSwitch.dark.basic : stylesSwitch.light.basic}*/
    >
      <div className="flex relative justify-between items-start w-full h-full text-xl  p-4 sm:p-8">
        <aside className="logo sm:w-1/3">
          <Link href="/">
            Learn <strong>languages</strong>
          </Link>
        </aside>
        <ul className="justify-around items-start w-full h-full hidden md:flex">
          <Link href="/">Home</Link>
          <details className="cursor-pointer">
            <summary className="uppercase logo">
              <strong className="hover:text-sky-700">English</strong>
            </summary>
            <ul className="flex flex-col border-solid border-t-4 border-sky-400 navDetails">
              <Link href="/english/irregular-verbs">{`Irregular Verbs (${IrregularVerbs.length})`}</Link>
              <Link href="/english/search-irregular">{`Irregular List (${IrregularVerbs.length})`}</Link>
              <Link href="/english/oxford-B1">{`Oxford B1 (${OxfordB1.length})`}</Link>
              <Link href="/english/oxford-B2">{`Oxford B2 (${OxfordB2.length})`}</Link>
              <Link href="/english/oxford-C1">{`Oxford C1 (${OxfordC1.length})`}</Link>
              <Link href="/english/phrasal-verbs">{`Phrasal Verbs (${LukesPhrasal.length})`}</Link>
              <Link href="/english/pagination">Pagination</Link>
            </ul>
          </details>

          <details className="cursor-pointer">
            <summary className="uppercase logo">
              <strong className="hover:text-sky-700">Deutsch</strong>
            </summary>
            <ul className="flex flex-col border-solid border-t-4 border-sky-400 navDetails">
              <Link href="/german/irregular-verbs">{`Unregelmäßige Verben (${VerbenData.length})`}</Link>
              <Link href="/german/goethe">{`Goethe (${Goethe.length})`}</Link>
            </ul>
          </details>
        </ul>

        <span className="hidden md:flex  bottom-2 right-4 text-3xl">
          <DarkModeBtn />
        </span>

        <div className="text-4xl md:hidden">
          <TiThMenu onClick={handleNav} />
        </div>
      </div>

      <Mobile__Nav nav={nav} handleNav={handleNav} />
    </nav>
  );
};

export default Navbar;
