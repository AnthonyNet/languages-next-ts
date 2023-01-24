"use client"


import Navbar from '../../../../components/navbar/Navbar'
import { OxfordC1 } from '../../../../myData'
import Card from '../../../../components/oxford-goethe/Card'



function page(){

  return (
    <div>
      <Navbar />
      <Card dataTS={OxfordC1}/>
    </div>
  )
}

export default page