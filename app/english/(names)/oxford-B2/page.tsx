"use client"


import { OxfordB2 } from '../../../../myData'
import Card from '../../../../components/oxford-goethe/Card'



function page(){

  return (
    <div>
      <Card dataTS={OxfordB2}/>
    </div>
  )
}

export default page