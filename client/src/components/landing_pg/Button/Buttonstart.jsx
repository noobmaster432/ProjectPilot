import React from 'react'
import './Buttonstart.css'

export default function Buttonstart({label,functionHandler}) {
  return (
    <>
    <button onClick={functionHandler} class="bn5">{label}</button>
    </>
  )
}