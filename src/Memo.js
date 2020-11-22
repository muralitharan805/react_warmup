import React from 'react'

function Memo({name}) {
  console.log('render memo');
  return (
    <div>
      {
        name
      }
    </div>
  )
}

export default React.memo(Memo)
