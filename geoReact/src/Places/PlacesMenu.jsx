import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { BsGrid } from 'react-icons/bs';
import { BsListTask } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';

export default function PlacesMenu(){
  return (
    <div className='menu_header'>
      <div className='izq_menu'>
        <Link to="/places/add" className='link_menu'><MdOutlineAddLocationAlt />Add</Link>
        <Link to="/places/grid" className='link_menu'><BsGrid />Grid</Link>
        <Link to="/places/list" className='link_menu'><BsListTask />List</Link>
      </div>
      <div className='der_menu'>
        <div className="buscador">
          <div className="container_buscador">
            <span className="icon"><BiSearchAlt /></span>
            <input type="search" id="search" placeholder="Search..." /> 
          </div>
        </div>
      </div>
    </div>
  )
}