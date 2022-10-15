import Nome from "./components/Nome";

//Function App é um componente
function App(){
  return(
    //JSX
    //praticamente um html do componente
    <div>
      <h1>Componente App</h1>
      <Nome aluno = "Roberto" idade = {30}/>
      <br/>
      <br/>
      <Nome aluno = "Maria" idade = {25}/>
    </div>
  );
}

export default App;