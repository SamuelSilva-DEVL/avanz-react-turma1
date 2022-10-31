import { useCallback, useEffect, useMemo, useState } from 'react'

import './App.css'
import Button from './components/Button'

import { Header } from './components/Header'
const list = [
  { id: 1, country:'Russia', launches:32},
  { id: 2, country:'US', launches:23 },
  { id: 3, country:'China', launches:16 },
  { id: 4, country:'Europe(ESA)', launches:7 },
  { id: 5, country:'India', launches:4 },
  { id: 6, country:'Japan', launches:3 }
];

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [lista, setLista] = useState(list);
  
  

  

  const addCallback = useCallback(() => {
    console.log('executou callback');
    
    setCount(count + 1)
  }, []);

  function sub(){
    setCount2(count2 - 1)
  }

  const listaModificada = useMemo(() => {
    console.log('executou dentro useMemo');
    
    return lista.map(item => {
      return { id: item.id, country: item.country }
    })

  }, [lista])
  
  

  console.log('lista original', lista);
  console.log('lista modificada', listaModificada);
 






  
  

  return (
    <div className="App">
      <Header />
      <span>Cliques {count}</span>
      <div className="card">
      
      <Button 
          id="butao1"         
          onClick={addCallback}
          titulo="Aumentar"
        />          
        
        <Button
        id="butao2"      
        onClick={sub}
        titulo="Diminuir"
        />          
        
        
         
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <h1>Vite + React</h1>
      
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
