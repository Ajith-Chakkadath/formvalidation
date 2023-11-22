import React from 'react'

import { Params, useParams } from 'react-router-dom'

export default function Display() {

    const value = useParams()

    console.log(value.fun)

  return (
    <div>
        <h1>hai {value.fun}</h1>
    </div>
  )
}
