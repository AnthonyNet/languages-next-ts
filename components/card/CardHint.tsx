import React from 'react'

interface CardHint {
  base: string;
  pastSimple: string;
  pastSimple2?: string;
  pastParticiple: string;
  pastParticiple2?: string;

}

const CardHint = ({base, pastSimple, pastSimple2, pastParticiple, pastParticiple2}:CardHint) => {
  return (
    <ul className="flex justify-between flex-wrap">
    <li>{base} - </li>
    <li>{pastSimple} - </li>
    {pastSimple2&&<li>{pastSimple2} - </li>}
    <li>{pastParticiple}</li>
    {pastParticiple2 ? (
      <li> -{pastParticiple2}</li>
    ) : null}
  </ul>
  )
}

export default CardHint
