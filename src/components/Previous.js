import React from 'react'
import "./Previous.css"

export default function Previous(props) {
  return (
    <button className="previous-button" onClick={props.task}><i class="fas fa-chevron-left fa-sm"></i> Previous</button>
  )
}