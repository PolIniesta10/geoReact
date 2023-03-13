import React from "react";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from '../userContext'
import { useForm } from '../hooks/useForm'

export default function Register({ setLogin }) {
  let {userEmail,setUserEmail, authToken,setAuthToken } = useContext(UserContext);
  const { formState, onInputChange } = useForm({
      name: "",
      email: "",
      password: "",
      password2: "",
      });
      
  const { name,email,password, password2} = formState

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password2 !== password) {
      alert("La contraseña no coincide");
      return false;
    }

    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      // Si els noms i les variables coincideix, podem simplificar
      body: JSON.stringify({ name, email, password })
      });

      const resposta = await data.json();
      if (resposta.success === true) {
        setAuthToken(resposta.authToken),
        setUserEmail(email);
      }
      else {
        const errores = document.getElementsByClassName("errores")[0];
        errores.innerHTML = resposta.message
        errores.removeAttribute("hidden")
      } 
    }
    catch {
      console.log("Error");
      alert("catch");
    }
  };
    return (
      <>
        <div className="container right-panel-active" id="container">
          <div className="form-container sign-up-container">
            <form className="form_log_reg" action="#">
              <h1 className="h1_log_reg">Crear cuenta</h1>
              <div className="social-container">
                <a href="https://es-es.facebook.com/" className="social" target="_blank"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                <a href="https://www.google.es/" className="social" target="_blank"><i><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                <a href="https://twitter.com/?lang=es" className="social" target="_blank"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              </div>
              <span className="span_log_reg">o use su correo electrónico para registrarse</span>
              <input className="input_log_reg" name="name" type="text" placeholder="Nombre" onChange={onInputChange} value={name}/>
              <input className="input_log_reg" name="email" type="email" placeholder="Email" onChange={onInputChange} value={email}/>
              <input className="input_log_reg" name="password" type="password" placeholder="Contraseña" onChange={onInputChange} value={password}/>
              <input className="input_log_reg" name="password2" type="password" placeholder="Repite contraseña" onChange={onInputChange} value={password2}/>
              <div className="errores" hidden></div>
              <button className="SignBtn margin-top" onClick={(e) => {handleRegister(e);}}>Registrarse</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1_log_reg">Bienvenido de nuevo!</h1>
                <p className="p_log_reg">Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
                <button className="SignBtn ghost" id="signUp" onClick={() => {setLogin(true);}}>Iniciar sesion</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }