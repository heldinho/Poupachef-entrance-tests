import React from 'react'
import Input from './Components/Input'
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

  const handleChange = e => {
    filterSelection()

    if (e === '' || Number(e) === 0) {
      return
    }

    let sht = sheet.filter(she => {
      return she.id === Number(e)
    })
    
    let element = document.getElementById(sht[0].id)
    element.classList.add('active')
  }

  // filterSelection("all")
  function filterSelection() {
    var x, i;
    x = document.getElementsByClassName("sheet")
    // if (c == "all") c = ""
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "active")
      // if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show")
    }
  }

  // function AddClass(element, name) {
  //   var i, arr1, arr2;
  //   arr1 = element.className.split(" ");
  //   arr2 = name.split(" ");
  //   for (i = 0; i < arr2.length; i++) {
  //     if (arr1.indexOf(arr2[i]) === -1) {element.className += " " + arr2[i];}
  //   }
  // }

  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
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

