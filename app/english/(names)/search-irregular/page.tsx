"use client"

import { FC } from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import { SearchIrregular } from '../../../../sections'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <SearchIrregular />
    </div>
  )
}

export default page