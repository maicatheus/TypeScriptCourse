//Componente Nome.
//Podemos ter vários componentes para serem usaados no JSX
const Nome = ({ aluno, idade })=>{
    return(
      //JSX
      <span>Bem-vindo: {aluno} - Idade: {idade} anos</span>
    );
}

// ou 
// const Nome = (props)=>{
//   return(
//     //JSX
//     <span>Bem-vindo: {props.aluno}</span>
//   );
// }

export default Nome;