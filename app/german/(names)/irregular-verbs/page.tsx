"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'

import { VerbenData }  from '../../../../myData'
import Irregular from '../../../../sections/Irregular'


const page:FC = () => {

  
  return (
    <div>
      <Navbar />
      <Irregular dataJSON={VerbenData}/>
    </div>
  )
}

export default page