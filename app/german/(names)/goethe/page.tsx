"use client"

import { FC } from 'react'
import Navbar from '../../../../components/navbar/Navbar'

import { Goethe }  from '../../../../myData'
import Card from '../../../../components/card/Card'


const page:FC = () => {

  
  return (
    <div>
      <Navbar />
      <Card dataTS={Goethe}/>
    </div>
  )
}

export default page