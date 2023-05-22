"use client"



import { IrregularVerbs } from '../../../../myData'
import Irregular from '../../../../sections/Irregular';

 function page() {
  return (
    <div>

     <Irregular dataTS={IrregularVerbs} />
    </div>
  )
}

export default page