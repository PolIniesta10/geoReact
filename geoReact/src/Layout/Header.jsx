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
          <div className='linksheader'><Link to="/places"><a><MdOutlinePlace /></a><a>Places</a></Link></div>
          <div className='linksheader'><Link to="/posts"><a><AiOutlinePicture /></a><a>Posts</a></Link></div>
          <div className='linksheader'><Link to="/about"><a><TiInfoLargeOutline /></a><a>About</a></Link></div>
      </div>
      <div className='der_header'>
          <div className='user__header'>Administrador ( author editor admin )</div>
          <button className='logout__header'><FiLogOut /></button>
      </div>
    </div>
  )
}
