"use client"


import Navbar from '../../../../components/navbar/Navbar'
import { IrregularVerbs } from '../../../../myData'
import Irregular from '../../../../sections/Irregular';

 function page() {
  return (
    <div>
      <Navbar />
     <Irregular dataTS={IrregularVerbs} />
    </div>
  )
}

export default page