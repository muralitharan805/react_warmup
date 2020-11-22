import React from 'react'

function Columns() {


  const item =[]
  return (
    <React.Fragment>
      {
        item.map(item=>(
          <React.Fragment key={item}>
            <h1>title</h1>
          </React.Fragment>
        ))
      }
      <td>name</td>
      <td>Murali</td>
    </React.Fragment>
  )
}

export default Columns
