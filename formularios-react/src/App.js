import { useState } from 'react';
//Function App é um componente
function App(){
  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [idade,setIdade] = useState(0);

  const [user, setUser] = useState({});

  const handleRegister = (e) =>{
    e.preventDefault();// evitar refresh e deletar info do forms
    alert("Usuario registrado com sucesso!")
    
    setUser({
      nome: nome, // nome do atributo : nome do state
      idade: idade,
      email: email
    })
  }

  return(
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome: </label><br/>
        <input 
          placeholder='Digite seu nome'
          value={nome}
          onChange={ (e) => setNome(e.target.value) }

          /><br/>
        
        <label>Email: </label><br/>
        <input 
          placeholder='Digite seu Email'
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
        /><br/>
        
        <label>Idade: </label><br/>
        <input 
          placeholder='Digite sua idade'
          value={idade}
          onChange={ (e) => setIdade(e.target.value) }
        /><br/>

        <button type='submit'>Resistrar</button>
        <br/><br/>
        <div>
          <span>Bem vindo: {user.nome}</span><br/>
          <span>Idade: {user.idade}</span><br/>
          <span>Email: {user.email}</span><br/>
        </div>
      </form>
    </div>
  );
}

export default App;