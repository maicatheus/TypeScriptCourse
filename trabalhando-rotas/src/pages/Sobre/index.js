import { Link } from "react-router-dom"

function Sobre() {
    return (
        <div>
            <h1>Página sobre a mepresa</h1><br/><br/>
            <Link to ="/">Home</Link><br/>
            <Link to ="/contato">Contato</Link>
        </div>
    );
}

export default Sobre;
  