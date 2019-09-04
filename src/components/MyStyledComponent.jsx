import React from 'react'

function MyStyledComponent() {

  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '5px'
  }
  var myStyledh1 = {
    textAlign: 'center',
    fontFamily: 'cursive'
  }
  var myStyledh2 = {
    textAlign: 'center',
    fontFamily: 'cursive',
    color: 'Red'
  }

  return (
    <div style={myStyledComponentStyles}>
      <h1 style={myStyledh1}>Hey, I'm a component</h1>
      <h2 style={myStyledh2}>But there's something different about me...</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right</p>
    </div>
  )
}

export default MyStyledComponent
