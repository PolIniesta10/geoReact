import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Register({ setLogin }) {
  let [formulari, setFormulari] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setFormulari({
      ...formulari,
      [e.target.name]: e.target.value
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    let { name, password, password2, email } = formulari;
    console.log(
      "He enviat les Dades:  " +
        name +
        "/" +
        email +
        "/" +
        password +
        "/" +
        password2
    );
      
    if (password2 !== password) {
      alert("La contraseña no coincide");
      return false;
    }

    fetch("https://backend.insjoaquimmir.cat/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      // Si els noms i les variables coincideix, podem simplificar
      body: JSON.stringify({ name, email, password })
    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {
          alert(resposta.authToken);
        }
      })
      .catch((data) => {
        console.log(data);
        alert("Catchch");
      });

      alert("He enviat les Dades:  " + email + "/" + password);

  };

    return (
      <>
        <div className="container right-panel-active" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Crear cuenta</h1>
              <div className="social-container">
                <a href="#" className="social"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                <a href="#" className="social"><i><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                <a href="#" className="social"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              </div>
              <span>o use su correo electrónico para registrarse</span>
              <input name="name" type="text" placeholder="Nombre" onChange={handleChange}/>
              <input name="email" type="email" placeholder="Email" onChange={handleChange}/>
              <input name="password" type="password" placeholder="Contraseña" onChange={handleChange}/>
              <input name="password2" type="password" placeholder="Repite contraseña" onChange={handleChange}/>
              <button className="SignBtn margin-top" onClick={(e) => {handleRegister(e);}}>Registrarse</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Bienvenido de nuevo!</h1>
                <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
                <button className="SignBtn ghost" id="signUp" onClick={() => {setLogin(true);}}>Iniciar sesion</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }