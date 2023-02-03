import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

export default function Footer(){
  return (
    <>
      <footer>
        <div className="footer">
          <div className="row">
            <a href="https://es-es.facebook.com/" target={"_blank"}><BsFacebook/></a>
            <a href="https://www.instagram.com/" target={"_blank"}><BsInstagram/></a>
            <a href="https://www.youtube.com/?hl=es&gl=ES" target={"_blank"}><BsYoutube/></a>
            <a href="https://twitter.com/?lang=es" target={"_blank"}><BsTwitter/></a>
          </div>

          <div className="row">
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="row">
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 
          </div>
        </div>
      </footer>
   
    </>
    
  )
}
