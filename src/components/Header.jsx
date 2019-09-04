import React from 'react'
import { Link } from 'react-router-dom'
import reallyAdorableDownload from '../assets/images/download.jpeg'

function Header() {
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <img src={reallyAdorableDownload}/>
    </div>
  )
}

export default Header
