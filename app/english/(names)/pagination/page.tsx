"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'

import Pagination from '../../../../sections/Pagination'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Pagination />
    </div>
  )
}

export default page