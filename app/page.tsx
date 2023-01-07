"use client"
import {useEffect} from 'react'
import {Navbar, MainPage} from '../sections'

const Page = () => {
  //Better put it into InitLocalStorage component
  
 //Set totalScore from localStorage
 useEffect(() => {
  localStorage.setItem("totalScore", JSON.stringify([]));
}, []);

  return (
    <div>
    
        <Navbar />
        <MainPage />
    </div>
  )
}

export default Page