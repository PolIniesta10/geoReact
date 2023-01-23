import reactLogo from './assets/react.svg'
import './App.css'
import LoginRegister from './auth/LoginRegister'
import { UserContext } from "./userContext";
import { useState } from 'react'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import NotFound from './Layout/NotFound';
import About from './About';


function App() {
  let [authToken, setAuthToken] = useState("");

  return (
    
    <UserContext.Provider value={{ authToken, setAuthToken }}  >
      {authToken ? (
      <>
        <Header/><Footer/><About/><NotFound/>
      </>): ( 
      <>
        <LoginRegister/>
      </>)}
      
    </UserContext.Provider>
  )
}

export default App
