import React from 'react'
import './style.scss'

export default function TextArea(props) {
  return (
    <React.Fragment>
      <label className="label">Resultado sequencia de Fibonacci</label>
      <textarea className="textarea" value={props.val}>{props.val}</textarea>
    </React.Fragment>
  )
}
