"use client"

import {FC, useState, useContext} from 'react'
import Link from 'next/link'
import { CgClose } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import ThemeButton from '../ThemeButton'

import {IrregularVerbs, OxfordB1, OxfordB2, OxfordC1, LukesPhrasal, VerbenData, Goethe} from '../../myData'

const Navbar:FC = () => {
const [nav, setNav] = useState(false);

const handleNav = () => {
    setNav(!nav);
  };

    return(
        <nav
        className={` w-full  min-h-20 shadow-xl z-[100]`}
       /* style={darkMode ? stylesSwitch.dark.basic : stylesSwitch.light.basic}*/
      >
        <div className="flex relative justify-between items-start w-full h-full text-xl  p-4 sm:p-8">
          <aside className="logo sm:w-1/3">
          <Link href="/">Learn <strong>languages</strong></Link>
          </aside>
          <span className="hidden md:flex absolute bottom-2 right-4 text-3xl">
            <ThemeButton />
          </span>
          <ul className="justify-around items-start w-full h-full hidden md:flex">
            <Link href="/">Home</Link>
            <details className="cursor-pointer">
              <summary className="uppercase logo">
                <strong className="hover:text-sky-700">English</strong>
              </summary>
              <ul className="flex flex-col border-solid border-t-4 border-sky-400 navDetails">
                <Link href="/english">{`Irregular Verbs (${IrregularVerbs.length})`}</Link>
                <Link href="/irregularSearch">{`Irregular List (${IrregularVerbs.length})`}</Link>
                <Link href="/oxford-B1">{`Oxford B1 (${OxfordB1.length})`}</Link>
                <Link href="/oxford-B2">{`Oxford B2 (${OxfordB2.length})`}</Link>
                <Link href="/oxford-C1">{`Oxford C1 (${OxfordC1.length})`}</Link>
                <Link href="/phrasal-1">{`Phrasal Verbs (${LukesPhrasal.length})`}</Link>
                <Link href="/pagination">Pagination</Link>
              </ul>
            </details>
  
            <details className="cursor-pointer">
              <summary className="uppercase logo">
                <strong className="hover:text-sky-700">Deutsch</strong>
              </summary>
              <ul className="flex flex-col border-solid border-t-4 border-sky-400 navDetails">
                <Link href="/german">{`Unregelmäßige Verben (${VerbenData.length})`}</Link>
                <Link href="/goethe">{`Goethe (${Goethe.length})`}</Link>
              </ul>
            </details>
          </ul>
          <div className="text-4xl md:hidden">
            <TiThMenu onClick={handleNav} />
          </div>
        </div>
  
        <div
          className={
            nav
              ? "snap-x z-10  fixed left-0 top-0 w-full h-screen bg-black/70"
              : "z-0"
          }
        >
          <div
            className={
              nav
                ? "responsiveMenu fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 sm:p-8 ease-in duration-500"
                : "fixed top-10 left-[-100%] ease-in duration-500"
            }
           /* style={darkMode? stylesSwitch.dark.responsiveMenu: null}*/
          >
            <div className="flex justify-between items-center">
              <aside className="logo sm:mr-40">
              <Link href="/">Learn <strong>languages</strong></Link>
              </aside>
              <div
                onClick={handleNav}
                className="navClose rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <CgClose />
              </div>
            </div>
            <div className="mottoCover border-b border-gray-300 my-4 text-sm sm:text-lg">
              <p>Evolution means everyday learning</p>
            </div>
            <nav>
              <ul className="flex flex-col  z-20">
               <div className="flex justify-between items-center">
               <Link className="py-4 uppercase" href="/">
                  Home
                </Link>
                <span className="bottom-2 right-4 text-3xl">
                  <ThemeButton />
                </span>
               </div>
  
               <main>
               <details className="py-4 cursor-pointer">
                  <summary className="uppercase border-gray-300 border-b logo">
                    <strong>English</strong>
                  </summary>
                  <ul className="flex flex-col navDetails">
                    <Link href="/english">{`Irregular verbs (${IrregularVerbs.length})`}</Link>
                    <Link href="/irregularSearch">{`Irregular list (${IrregularVerbs.length})`}</Link>
                    <Link href="/oxford-B1">{`Oxford B1 (${OxfordB1.length})`}</Link>
                    <Link href="/oxford-B2">{`Oxford B2 (${OxfordB2.length})`}</Link>
                    <Link href="/oxford-C1">{`Oxford C1 (${OxfordC1.length})`}</Link>
                    <Link href="/phrasal-1">{`Lukes Phrasal (${LukesPhrasal.length})`}</Link>
                    <Link href="/pagination">Pagination</Link>
                  </ul>
                </details>
  
                <details className="cursor-pointer">
                  <summary className="uppercase border-gray-300 border-b logo">
                   <strong> Deutsch</strong>
                  </summary>
                  <ul className="flex flex-col navDetails">
                    <Link href="/german">{`Unregelmäßige Verben (${VerbenData.length})`}</Link>
                    <Link href="/goethe">{`Goethe (${Goethe.length})`}</Link>
                  </ul>
                </details>
               </main>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;