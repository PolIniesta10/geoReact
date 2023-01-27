import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { MdOutlinePlace } from 'react-icons/md';
import { AiOutlinePicture } from 'react-icons/ai';


export default function Header() {

  return (
    <div className='cajamasterheader'>
      <div className='izq_header'>
          <Link to="/places"><div className='linksheader'><a><MdOutlinePlace /></a><a>Places</a></div></Link>
          <Link to="/posts"><div className='linksheader'><a><AiOutlinePicture /></a><a>Posts</a></div></Link>
          <Link to="/about"><div className='linksheader'><a><TiInfoLargeOutline /></a><a>About</a></div></Link>
      </div>
      <div className='der_header'>
          <div className='user__header'>Administrador ( author editor admin )</div>
          <button className='logout__header'><FiLogOut /></button>
      </div>
    </div>
  )
}
