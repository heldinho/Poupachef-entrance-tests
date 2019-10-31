import React from 'react'
import './style.scss'

export default function Input(props) {
  return (
    <React.Fragment>
      <label className="label">Digite um ID para selecionar a Sheet: {props.min} to {props.max}</label>
      <input type="tel" className="input" onChange={props.change} />
    </React.Fragment>
  )
}
