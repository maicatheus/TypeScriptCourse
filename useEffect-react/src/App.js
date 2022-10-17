import { useState, useEffect } from 'react';
//Function App é um componente
function App(){
  const [input,setInput] = useState("");

  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar react JS'
  ]);


  //-=-=-=- |component did mount| =-=-==
  useEffect(() =>{
    const tarefasStorage = localStorage.getItem("@tarefa")
    
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
      //joganto no state tarefas 
      //todas as tarefas do localstorage
    }
  }, []);


  //=-=-=- |UPDATE| -=-=-=-=-
  //Toda vez que é montado o componente, 
  //é chamado o use effect
  useEffect(()=>{
    localStorage.setItem("@tarefa", JSON.stringify(tarefas))
    //salvando no local storage o Json atarefas toda vez
    //que a terefas for alterada
  }, [tarefas]);
  //toda vez que a tarefas sofre alteração, 
  //sera chamado o useState

  const handleRegister = (e) =>{
    e.preventDefault();// evitar refresh e deletar info do forms
    
    setTarefas([...tarefas,input]);// spread operator
    setInput('');
  };

  return(
    <div>
      <h1>Registrar tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa: </label><br/>
        <input 
          placeholder='Digite uma tarefa'
          value={input}
          onChange={ (e) => setInput(e.target.value) }
          /><br/>
        <button type='submit'>Resistrar</button>
        <br/><br/>
        <div>
          {tarefas.map(tarefa =>(
            <li key = {tarefa}>{tarefa}</li>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;