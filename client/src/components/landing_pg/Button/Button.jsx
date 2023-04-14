import React from 'react'
import './Button.css'

export default function Button({label,functionHandler}) {
  return (
    <button onClick={functionHandler} class="btnfos1 btnfos-5">
      {label}
    </button>
  )
}
