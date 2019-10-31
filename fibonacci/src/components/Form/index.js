import React from 'react'
import Input from './Components/Input'
import TextArea from './Components/Text-Area'
import Button from './Components/Button'
import './style.scss'

export default function Form() {
  const [quadro, setQuadro] = React.useState(0)
  const [numFibo, setNumFibo] = React.useState(0)

  const fibonacci = () => {
    let numero = 0
    let proximo_numero = 1
    let auxiliar
    let qd = []

    while ( numero <= numFibo ) {
      (numero === 0) ? qd.push(numero) : qd.push(`  ${numero}`)
      setQuadro(qd)
      auxiliar = proximo_numero
      proximo_numero = proximo_numero + numero
      numero = auxiliar
    }
  }

  const handleChange = e => {
    setNumFibo(e)
  }

  return (
    <React.Fragment>
      <div className="form">
        <div className="row">
          <Input change={e => handleChange(e.target.value)} />
        </div>
        <div className="row">
          <TextArea val={quadro} />
        </div>
        <div className="row">
          <Button click={() => fibonacci(numFibo)} label="Mostrar Fibonacci" />
        </div>
      </div>
    </React.Fragment>
  )
}

