import React from 'react'

function Hero({name}) {
  if(name==='kkk'){
    throw new Error('not a hero')
  }
  return (
    <div>
      {name}
    </div>
  )
}

export default Hero
