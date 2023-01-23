import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Login({ setLogin }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const sendLogin = (e) => {
    e.preventDefault();

    console.log("Comprovant credencials....");
    // Enviam dades a l'aPI i recollim resultat
    fetch("https://backend.insjoaquimmir.cat/api/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password })
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
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Iniciar sesion</h1>
              <div className="social-container">
                <a href="#" className="social"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                <a href="#" className="social"><i><FontAwesomeIcon icon={faGooglePlusG}/></i></a>
                <a href="#" className="social"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              </div>
              <span>o usa tu cuenta ya existente</span>
              <input name="email" type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value);}} />
              <input name="password" type="password" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value);}}/>
              <a href="#">Olvidaste tu contraseña?</a>
              <button className="SignBtn" onClick={(e) => {sendLogin(e.target.value);}}>Iniciar sesion</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Hola, amigo!</h1>
                <p>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
                <button className="SignBtn ghost" id="signIn" onClick={() => {setLogin(false);}}>Registrate
                </button>
                alert(message.alert)
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }