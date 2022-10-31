
import { useState } from "react";
import Button from "../Button";

export default function Buttons() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState(0)
  

  
  return (
    <div className="card">
      <span>Cliques {count}</span>
      
      <Button 
          id="butao1"         
          onClick={() => {
            
            setCount(count + 1);
            
          }}
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
         
  );
}
