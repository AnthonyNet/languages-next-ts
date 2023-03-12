"use client"


import { Goethe }  from '../../../../myData'
import Card from '../../../../components/oxford-goethe/Card'

function page(){

  
  return (
    <div>
    
      <Card dataTS={Goethe}/>
    </div>
  )
}

export default page