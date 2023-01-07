"use client"

import { FC } from 'react'
import Navbar from '../../../../components/navbar/Navbar'

import {Pagination} from '../../../../sections/'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Pagination />
    </div>
  )
}

export default page