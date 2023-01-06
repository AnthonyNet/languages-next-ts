"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'
import { dataJSON } from '../../../../myData/IrregularVerbsTS'
import Irregular from '../../../../sections/Irregular'
const page:FC = () => {
console.log(dataJSON);

  
  return (
    <div>
      <Navbar />
      <Irregular dataJSON={dataJSON}/>
    </div>
  )
}

export default page