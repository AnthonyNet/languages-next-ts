"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'
import { LukesPhrasal } from '../../../../myData'
import Card from '../../../../components/card/Card'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Card dataJSON={LukesPhrasal}/>
    </div>
  )
}

export default page