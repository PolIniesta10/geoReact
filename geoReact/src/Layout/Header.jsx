import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div>
        <Link to="/places">Places </Link>
        <Link to="/posts">Posts </Link>
        <Link to="/about">About </Link>
        <Link to="/notFound">NotFound </Link>

    </div>
  )
}
