import React from "react";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from '../userContext'
import { useForm } from '../hooks/useForm'
import { useLogin } from '../hooks/useLogin';


export default function Login({ setLogin }) {
    
  const { formState, onInputChange } = useForm({
    email: "oscar@gmail.com",
    password: "oscar1234",
  });

  const {email,password} = formState;

  const {doLogin} = useLogin();

  
    return (
      <>
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form className="form_log_reg" action="#">
              <h1 className="h1_log_reg">Iniciar sesion</h1>  
              <div className="social-container">
                <a href="https://es-es.facebook.com/" className="social" target="_blank"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                <a href="https://www.google.es/" className="social" target="_blank"><i><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                <a href="https://twitter.com/?lang=es" className="social" target="_blank"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              </div>
              <span className="span_log_reg">o usa tu cuenta ya existente</span>
              <input name="email" type="email" placeholder="Email" value={email} onChange={onInputChange} />
              <input name="password" type="password" placeholder="Contraseña" value={password} onChange={onInputChange}/>
              <div className="errores" hidden></div>
              <a className="a_log_reg" href="#">Olvidaste tu contraseña?</a>
              <button className="SignBtn" onClick={ () => { doLogin(formState) }}>Iniciar sesion</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="h1_log_reg">Hola, amigo!</h1>
                <p className="p_log_reg">Ingresa tus datos personales y comienza tu viaje con nosotros</p>
                <button className="SignBtn ghost" id="signIn" onClick={() => {setLogin(false);}}>Registrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }