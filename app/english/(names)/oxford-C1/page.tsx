"use client"

import { FC } from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import { OxfordC1 } from '../../../../myData'
import Card from '../../../../components/card/Card'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Card dataTS={OxfordC1}/>
    </div>
  )
}

export default page