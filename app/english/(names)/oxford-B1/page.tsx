"use client"

import Navbar from '../../../../components/navbar/Navbar'
import { OxfordB1 } from '../../../../myData'
import Card from '../../../../components/card/Card'



function page(){

  return (
    <div>
      <Navbar />
      <Card dataTS={OxfordB1}/>
    </div>
  )
}

export default page