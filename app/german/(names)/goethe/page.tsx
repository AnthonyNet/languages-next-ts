"use client"


import Navbar from '../../../../components/navbar/Navbar'
import { Goethe }  from '../../../../myData'
import Card from '../../../../components/card/Card'


function page(){

  
  return (
    <div>
      <Navbar />
      <Card dataTS={Goethe}/>
    </div>
  )
}

export default page