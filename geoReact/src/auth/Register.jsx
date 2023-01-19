import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Register({ setCanvi }) {
    return (
      <>
        <div class="container right-panel-active" id="container">
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div class="social-container">
                <a href="#" class="social"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                <a href="#" class="social"><i><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                <a href="#" class="social"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button class="SignBtn" >Sign Up</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="SignBtn ghost" id="signUp" onClick={() => {
                  setCanvi(true);
                  }}
                >
                  Inicia sesion
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }