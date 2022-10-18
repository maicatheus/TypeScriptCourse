import React, {useEffect, useState} from "react";
import './style.css'
//https://rickandmortyapi.com/api/character/




function App() {
  const [personagem, setPersonagem] = useState([])
  //component did mount
  useEffect(()=>{
    // Quando o site carregar, vai executar tudo
    //que está neste useEffect
    function loadApi(){

      let url = 'https://rickandmortyapi.com/api/character/'
      fetch(url)
      .then((r)=>r.json())
      .then((json) =>{
        setPersonagem(json.results)
      })
    }
    loadApi();
  },[])

  return (
    <div className="container">
      <header>
        <strong>React Ric and Morty</strong>
      </header>
      
      {personagem.map((item)=>{
        return(
          <article key = {item.id} className="post">
            <strong className="nome">{item.name}</strong>
            <img src={item.image} alt= {item.name} className = "foto"/>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
