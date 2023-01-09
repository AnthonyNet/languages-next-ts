"use client"

import Navbar from '../../../../components/navbar/Navbar'

import { VerbenData }  from '../../../../myData'
import Irregular from '../../../../sections/Irregular';


function page(){

  
  return (
    <div>
      <Navbar />
    <Irregular dataTS={VerbenData} />
    </div>
  )
}

export default page