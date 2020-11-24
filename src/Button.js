import React from 'react'

function Button({handleClick,children}) {
  console.log(`button title`);

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button) 
