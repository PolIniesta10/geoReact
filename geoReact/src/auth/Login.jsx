import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Login({ setCanvi }) {
    return (
      <>
        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div class="social-container">
              <a href="#" class="social"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                <a href="#" class="social"><i><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                <a href="#" class="social"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button class="SignBtn">Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="SignBtn ghost" id="signIn" onClick={() => {
                  setCanvi(false);
                  }}
                >
                  Registrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }