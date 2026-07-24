import React, { Component } from 'react'
import Component1 from './Component1'


const App = () => {
  const name = "Chandan Tiwadi"
  return (
    <div>
      <h1>Example</h1>
      <Component1 name={name}/>
    </div>
  )
}

export default App