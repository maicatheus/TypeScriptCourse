import { Link } from "react-router-dom"

function Contato() {
    return (
        <div>
            <h1>Página contato</h1><br/>
            <span>Contato da empresa (ddd) xxxxx-xx38</span><br/><br/>
            <Link to ="/">Home</Link><br/>
            <Link to ="/sobre">Sobre</Link>
        </div>
    );
}

export default Contato;
  