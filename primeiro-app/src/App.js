import { useState } from 'react';
import Nome from "./components/Nome";


//Function App é um componente
function App(){
  //const [ nome do estado, func q troca valor do estado] = useState(valor default)
  const [testeState,setTesteState] = useState("Teste de useState")

  const handleChangeUseState = (texto) =>{
    setTesteState(texto)
  }

  return(
    //JSX
    //praticamente um html do componente
    <div>
      <h1>Componente App</h1><br/>
      <h2>Olá, {testeState}</h2>
      
      {/* Função handleChangeUseStatealtera o valor testeState
      ao ser executada */}
      {/* <button onClick={handleChangeUseState}> 
      ou usando func  anonima*/}

      <button onClick={() =>handleChangeUseState("Batata")}>
        Mudar 
      </button><br/><br/>
      <Nome aluno = "Roberto" idade = {30}/><br/>
      <Nome aluno = "Maria" idade = {25}/><br/>
      <Nome aluninho = "Maria" idade = {25}/>
    </div>
    
  );
}

export default App;