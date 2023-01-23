import reactLogo from './assets/react.svg'
import './App.css'
import LoginRegister from './auth/LoginRegister'
import { UserContext } from "./userContext";
import { useState } from 'react'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import About from './About';
import { Routes, Route, Router } from 'react-router-dom';
import Posts from './Posts/Posts';
import Places from './Places/Places';
import NotFound from './NotFound';


function App() {
  let [authToken, setAuthToken] = useState("");

  return (
    
    <UserContext.Provider value={{ authToken, setAuthToken }}  >
      {authToken ? (
      <>
        <Header/>
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Places />}/>
            <Route path="/places" element={<Places/>} />
            <Route path="/posts" element={<Posts/>} />
          </Routes>
        
        <Footer/>
      </>): ( 
      <>
        <LoginRegister/>
      </>)}
      
    </UserContext.Provider>
  )
}

export default App
