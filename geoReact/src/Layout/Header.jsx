import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { MdOutlinePlace } from 'react-icons/md';
import { AiOutlinePicture } from 'react-icons/ai';
import { UserContext } from '../userContext'
import { useState, useContext, useEffect } from "react";


export default function Header() {
  let { authToken,setAuthToken } = useContext(UserContext);
  let { user,setUser } = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    
  

    fetch("https://backend.insjoaquimmir.cat/api/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken
      },
      method: "POST",
    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {
          setAuthToken("");
        }
      })
      .catch((data) => {
        console.log(data);
        alert("Catchch");
      });
  };

  useEffect(() => {
      
    const handleUser = (e) => {
      e.preventDefault();
  
      
    
  
      fetch("https://backend.insjoaquimmir.cat/api/user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken
        },
        method: "GET",
      })
        .then((data) => data.json())
        .then((resposta) => {
          if (resposta.success === true) {
            console.log(resposta);
          }
        })
        .catch((data) => {
          console.log(data);
          alert("Catchch");
        });
    };
  
}, [])

  return (
    <div className='cajamasterheader'>
      <div className='izq_header'>
          <div className='linksheader'><Link to="/places"><MdOutlinePlace />Places</Link></div>
          <div className='linksheader'><Link to="/posts"><AiOutlinePicture />Posts</Link></div>
          <div className='linksheader'><Link to="/about"><TiInfoLargeOutline />About</Link></div>
      </div>
      <div className='der_header'>
          <div className='user__header'></div>
          <button className='logout__header' onClick={(e) => {handleRegister(e);}}><FiLogOut /></button>
      </div>
    </div>
  )
}
