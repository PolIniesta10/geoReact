import React from 'react'
import { Link } from 'react-router-dom'
import { BiImageAdd } from 'react-icons/bi';
import { BiImage } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { BsListTask } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';

export default function PostsMenu(){
  return (
    <div className='menu_header'>
      <div className='izq_menu'>
        <Link to="/posts/add" className='link_menu'><BiImageAdd />Add</Link>
        <Link to="/posts/grid" className='link_menu'><BsGrid />Grid</Link>
        <Link to="/posts/list" className='link_menu'><BsListTask />List</Link>
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