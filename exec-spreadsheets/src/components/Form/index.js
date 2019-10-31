import React from 'react'
import Input from './Components/Input'
import Button from './Components/Button'
import Sheet from './Components/Sheet'
import './style.scss'

const sheet = [
  { id: 1, text: 'A' },
  { id: 2, text: 'B' },
  { id: 3, text: 'C' },
  { id: 4, text: 'AA' },
  { id: 5, text: 'AB' },
  { id: 6, text: 'AC' },
  { id: 7, text: 'BA' },
  { id: 8, text: 'BB' },
  { id: 9, text: 'BC' },
  { id: 10, text: 'CA' },
  { id: 11, text: 'CB' },
  { id: 12, text: 'CC' },
  { id: 13, text: 'AAA' },
  { id: 14, text: 'AAB' },
  { id: 15, text: 'AAC' },
  { id: 16, text: 'ABA' },
  { id: 17, text: 'ABB' },
  { id: 18, text: 'ABC' },
  { id: 19, text: 'ACA' },
  { id: 20, text: 'ACB' },
  { id: 21, text: 'ACC' },
  { id: 22, text: 'AAAA' },
  { id: 23, text: 'AABA' },
  { id: 24, text: 'AABB' },
  { id: 25, text: 'AABC' },
  { id: 26, text: 'AACA' },
  { id: 27, text: 'AACB' },
  { id: 28, text: 'AACC' }
]

export default function Form() {
  const [num, setNum] = React.useState(0)

  const handleChange = e => {
    setNum(e)
  }


  return (
    <React.Fragment>
      <div className="form">
        <div className="row">
          <Input change={e => handleChange(e.target.value)} min={sheet[0].id} max={sheet[27].id} />
        </div>
        <div className="row">
          <div className="container">
            {sheet.map(she => <Sheet classe="active" id={she.id} key={she.id} text={she.text} />)}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

