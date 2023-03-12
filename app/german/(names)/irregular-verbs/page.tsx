"use client"



import { VerbenData }  from '../../../../myData'
import Irregular from '../../../../sections/Irregular';


function page(){

  
  return (
    <div>
  
    <Irregular dataTS={VerbenData} />
    </div>
  )
}

export default page