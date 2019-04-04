import React from 'react'
import './Next.css'

export default function Next(props) {
  return (
    <button className="next-button" onClick={props.task}>Next <i class="fas fa-chevron-right fa-sm"></i></button>
  )
}