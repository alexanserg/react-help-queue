import React from 'react'

function MyStyledComponent() {

  var myStyledComponentStyles = {
    backgroundColor: 'yellow',
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
    <div>
      <h1 style={myStyledComponentStyles}>Hey, I'm a component</h1>
      <h2 style={myStyledh1}>But there's something different about me...</h2>
      <h3 style={myStyledh2}>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right</p>

      <p className="red-text">only this paragraph will get the style :)</p>
      <style jsx>{'.red-text {color: red;}'}</style>

    </div>
  )
}

export default MyStyledComponent
