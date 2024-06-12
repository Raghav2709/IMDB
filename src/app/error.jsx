"use client"

import React from 'react'
import { useEffect } from 'react'


const error = ({error, reset}) => {
  useEffect(() => {
    console.log(error)
  },[error])

  return (
    <div className='text-center mt-10'>
    <div>
        <h1>Something Went Wrong. Please try again later.</h1>
        <button className='hover:text-amber-600' onClick={() => {reset()}}>Try Again</button>
    </div>
    </div>
  )
}

export default error