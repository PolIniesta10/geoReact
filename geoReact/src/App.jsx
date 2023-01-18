import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './auth/Login'
import Register from './auth/Register'

function App() {
  let [login, setLogin] = useState(true);
  
  return (
    <div className="App">
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        Commutar Color
      </button>
      {login ? <Login /> : <Register />}
    </div>
    
  )
}

export default App
