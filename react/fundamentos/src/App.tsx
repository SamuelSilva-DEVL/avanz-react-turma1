import { useState } from 'react'

import './App.css'
import Button from './components/Button'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      
      <h1>Vite + React</h1>
      <span>Cliques {count}</span>
      <div className="card">
        <Button 
          id="butao1"         
          onClick={() => setCount((count) => count + 1)} 
          titulo="Aumentar"
        />          
        
        <Button
        id="butao2"      
        onClick={() => setCount((count) => count - 1)}
        titulo="Diminuir"
        />          
        
        <Button 
        onClick={() => setCount((count) => count - 1)}
        titulo="Novo Botão"
        />
         
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
