import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  
  return (
    <div className='cajamasterheader'>
      <div className='izq_header'>
          <div className='linksheader'><Link to="/places">Places</Link></div>
          <div className='linksheader'><Link to="/posts">Posts</Link></div>
          <div className='linksheader'><Link to="/about">About</Link></div>
        </div>
        <div className='der_header'>

        </div>
    </div>
  )
}
