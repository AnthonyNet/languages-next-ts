"use client"

import { OxfordB1 } from '../../../../myData'
import Card from '../../../../components/oxford-goethe/Card-new'



function page(){

  return (
    <div>

      <Card dataTS={OxfordB1}/>
    </div>
  )
}

export default page