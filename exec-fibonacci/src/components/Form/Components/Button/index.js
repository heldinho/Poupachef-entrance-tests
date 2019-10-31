import React from 'react'
import './style.scss'

export default function Button(props) {
  return (
    <React.Fragment>
      <button onClick={props.click} className="btn">{props.label}</button>
    </React.Fragment>
  )
}
