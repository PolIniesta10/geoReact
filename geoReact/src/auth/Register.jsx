import React from "react";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from '../userContext'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
export default function Register({ setLogin }) {
  let [formulari, setFormulari] = useState({});
  let { authToken,setAuthToken } = useContext(UserContext)

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      setFormulari({
        ...formulari,
        [e.target.name]: e.target.value
      });
    }
    catch {
      console.log("Catch!");
    }
    
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    let { name, password, password2, email } = formulari;

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
        setAuthToken(resposta.authToken);
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
                <a href="#" className="social"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                <a href="#" className="social"><i><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                <a href="#" className="social"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              </div>
              <span className="span_log_reg">o use su correo electrónico para registrarse</span>
              <input className="input_log_reg" name="name" type="text" placeholder="Nombre" onChange={handleChange}/>
              <input className="input_log_reg" name="email" type="email" placeholder="Email" onChange={handleChange}/>
              <input className="input_log_reg" name="password" type="password" placeholder="Contraseña" onChange={handleChange}/>
              <input className="input_log_reg" name="password2" type="password" placeholder="Repite contraseña" onChange={handleChange}/>
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