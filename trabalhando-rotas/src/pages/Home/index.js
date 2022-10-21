import { Link } from "react-router-dom"
function Home() {
    return (
        <div>
            <h1>Bem-vindo a página home</h1><br/><br/>
            <hr/>
            <Link to="/produto/123">Acessar produto 123</Link>
        </div>
    );
}
  
export default Home;
  