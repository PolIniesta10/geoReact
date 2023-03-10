import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { MdOutlinePlace } from 'react-icons/md';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiCalendarPlus } from 'react-icons/bi';
import { UserContext } from '../userContext'
import { useState, useContext, useEffect } from "react";


export default function Header() {

  let { authToken,setAuthToken } = useContext(UserContext);
  let [ user,setUser ] = useState('');
  let [ roles, setRoles] = useState([]);

  const logOut = async () => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken
      },
      method: "POST",
      });
      const resposta = await data.json();
        if (resposta.success === true) {
          setAuthToken("");
        }
      }
    catch {
      console.log(data);
      alert("Catchch");
    }
  };
  const obtUser = async () => {
    try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken
          },
          method: "GET",
        })
          const resposta = await data.json();
          if (resposta.success === true) {
              console.log(resposta);
              setUser(resposta.user.name);
              setRoles(resposta.roles);
          }
          else {
            console.log("error");
          }
    }
    catch {
      console.log(data);
      alert("Catch");
    }
  };
  
  useEffect(() => {
    obtUser();
  }, [])

  return (
    <div className='cajamasterheader'>
      <div className='logo_header'></div>
      <div className='izq_header'>
          <Link to="/places" className='linksheader'><MdOutlinePlace />Places</Link>
          <Link to="/posts" className='linksheader'><AiOutlinePicture />Posts</Link>
          <Link to="/about" className='linksheader'><TiInfoLargeOutline />About</Link>
          <Link to="/todos" className='linksheader'><BiCalendarPlus />Todos</Link>
      </div>
      <div className='der_header'>
          <div className='user__header'><p>{user}({ roles.map ((v) => ( <span key={v}> {v} </span> ))})</p></div>
          <button className='logout__header' onClick={(e) => {logOut(e);}}><FiLogOut /></button>
      </div>
    </div>
  )
}
