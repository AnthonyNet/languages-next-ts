"use client"

import { FC } from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import { IrregularVerbs } from '../../../../myData'
import Irregular from '../../../../sections/Irregular'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Irregular dataTS={IrregularVerbs}/>
    </div>
  )
}

export default page