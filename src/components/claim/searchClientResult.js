import React from 'react'

  export default function SearchClientResult({clients, setSelectedSearchClient}) {

  const setSelected = (e) => {
    console.log("VALUE: ", e.target.value)
    setSelectedSearchClient(e.target.value)
  }

  return (
    <ul className="list-group col-12">
      {
        clients.map((element, index) => (
          <li className="list-group-item list-group-item-action" 
            key={index} 
            value={element.id}
            onClick={setSelected}
            style={{ display: "inline-block" }} >
            {element.apellido + ", " + element.nombre}<br />
          </li>
        ))
      }
    </ul>
  )
}