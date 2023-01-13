"use client"

import {Navbar, MainPage} from '../sections'

interface localStorage {
  totalScore: number | null;
}

function Page(){


  return (
    <div>
        <Navbar />
        <MainPage />
    </div>
  )
}

export default Page