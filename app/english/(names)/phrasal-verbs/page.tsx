"use client"

import { FC } from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import { LukesPhrasal } from '../../../../myData'
import Card from '../../../../components/card/Card'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Card dataTS={LukesPhrasal}/>
    </div>
  )
}

export default page