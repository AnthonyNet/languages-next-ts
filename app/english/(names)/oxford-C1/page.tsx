"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'
import { OxfordC1 } from '../../../../myData'
import Card from '../../../../components/card/Card'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Card dataJSON={OxfordC1}/>
    </div>
  )
}

export default page