import React from 'react'
import './style.scss'

export default function Input(props) {
  return (
    <React.Fragment>
      <label className="label">Digite o valor para mostrar a sequencia de Fibonacci</label>
      <input type="tel" className="input" onChange={props.change} />
    </React.Fragment>
  )
}
