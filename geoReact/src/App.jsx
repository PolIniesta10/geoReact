import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './auth/Login'
import Register from './auth/Register'

function App() {
  let [login, setLogin] = useState(true);
  
  return (
    <div className="App">
      {login ? <Login setCanvi={setLogin} /> : <Register setCanvi={setLogin} />}
    </div>
    
  )
}

export default App
