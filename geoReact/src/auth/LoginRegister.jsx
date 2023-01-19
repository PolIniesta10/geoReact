import React from 'react'
import Login from './Login';
import Register from './Register';
import { useState } from 'react'


export default function App() {
  let [login, setLogin] = useState(true);
  
  return (
    <div className="App">
      {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
      
    </div>
    
  )
}
