"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'

import { Goethe }  from '../../../../myData'
import Card from '../../../../components/card/Card'


const page:FC = () => {

  
  return (
    <div>
      <Navbar />
      <Card dataJSON={Goethe}/>
    </div>
  )
}

export default page