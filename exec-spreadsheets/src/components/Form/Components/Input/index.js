import React from 'react'
import './style.scss'

export default function Input(props) {
  return (
    <React.Fragment>
      <label className="label">{props.Hlabel}</label>
      <input type={props.Htype} className="input" onKeyPress={props.Hkeypress} onChange={props.Hchange} maxLength={props.Hmaxcaracter} />
    </React.Fragment>
  )
}
