"use client"

import { FC } from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import { OxfordB2 } from '../../../../myData'
import Card from '../../../../components/card/Card'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Card dataTS={OxfordB2}/>
    </div>
  )
}

export default page