import React from 'react'
import './style.scss'

export default function Sheet(props) {
  return (
    <React.Fragment>
      <div id={props.id} className={`sheet`}>{props.text}</div>
    </React.Fragment>
  )
}
