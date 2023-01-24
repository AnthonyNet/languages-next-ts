"use client"


import Navbar from '../../../../components/navbar/Navbar'
import { LukesPhrasal } from '../../../../myData'
import Card from '../../../../components/oxford-goethe/Card'



function page(){

  return (
    <div>
      <Navbar />
      <Card dataTS={LukesPhrasal}/>
    </div>
  )
}

export default page