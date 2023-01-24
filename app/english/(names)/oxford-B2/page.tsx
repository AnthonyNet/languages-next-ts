"use client"

import Navbar from '../../../../components/navbar/Navbar'
import { OxfordB2 } from '../../../../myData'
import Card from '../../../../components/oxford-goethe/Card'



function page(){

  return (
    <div>
      <Navbar />
      <Card dataTS={OxfordB2}/>
    </div>
  )
}

export default page