"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'
import { OxfordB2 } from '../../../../myData'
import Card from '../../../../components/card/Card'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Card dataJSON={OxfordB2}/>
    </div>
  )
}

export default page