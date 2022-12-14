import React from 'react'
import { Link } from 'react-router-dom'

function DefaultPage() {
  return (
    <div>
        <h1>Page not found</h1>
        <h2> <Link to='/MainPage'>Home</Link></h2>
    </div>
  )
}

export default DefaultPage