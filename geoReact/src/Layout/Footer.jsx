import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

export default function Footer(){
  return (
    <>
      <footer>
        <div class="footer">
          <div class="row">
            <a href="#"><BsFacebook/></a>
            <a href="#"><BsInstagram/></a>
            <a href="#"><BsYoutube/></a>
            <a href="#"><BsTwitter/></a>
          </div>

          <div class="row">
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div class="row">
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 
          </div>
        </div>
      </footer>
   
    </>
    
  )
}
